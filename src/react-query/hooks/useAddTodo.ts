import axios from 'axios';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import { Todo } from "./useTodos";

interface AddTodoContext {
    previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: (todo: Todo) => axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo).then((res) => res.data),

        onMutate: (newTodo) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

            //APPROACH: Update the cache with the new data without refetching
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
                newTodo,
                ...todos
            ]);

            onAdd(); //if (ref.current) ref.current.value = '';

            return { previousTodos };
        },

        onSuccess: (savedTodo, newTodo) => {
            //APPROACH: Invalidate the cache to refetch the data
            //queryClient.invalidateQueries({ queryKey: ['todos'] });
            queryClient.setQueryData<Todo[]>(['todos'], todos =>
                todos?.map(todo =>
                    todo.id === newTodo.id ? savedTodo : todo
                )
            );
        },
        onError(error, newTodo, context) {
            //APPROACH: Revert the cache to the previous state
            if (!context) {
                return;
            }

            queryClient.setQueryData<Todo[]>(['todos'], context.previousTodos);
        },
    });
}

export default useAddTodo;