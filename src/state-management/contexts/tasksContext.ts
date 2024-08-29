import { createContext, Dispatch } from "react";
import { Task, TaskAction } from "../reducers/taskReducer";

interface TasksContextType {
    tasks: Task[];
    dispatch: Dispatch<TaskAction>;
}

const TasksContext = createContext<TasksContextType>({} as TasksContextType);

// const TasksProvider: React.FC = ({ children }) => {
//     const [tasks, dispatch] = useReducer(taskReducer, []);

//     return (
//         <TasksContext.Provider value= {{ tasks, dispatch }
// }>
//     { children }
//     </TasksContext.Provider>
//     );
// };

export default TasksContext;