import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
    previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: todoService.post,

        onMutate: (newTodo) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

            //APPROACH: Update the cache with the new data without refetching
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
                newTodo,
                ...todos
            ]);

            // call the onAdd function to move the controll to the component
            onAdd();

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