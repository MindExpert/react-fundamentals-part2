import { ReactNode, useReducer } from 'react';
import TaskContext from './contexts/tasksContext';
import taskReducer from './reducers/taskReducer';

// Create a context for the Auth Provider
interface Prop {
    children: ReactNode;
}

const TaskProvider = ({ children }: Prop) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;