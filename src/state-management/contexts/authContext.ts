import { createContext, Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";

interface AuthContextType {
    user: string;
    dispatch: Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// const TasksProvider: React.FC = ({ children }) => {
//     const [tasks, dispatch] = useReducer(taskReducer, []);

//     return (
//         <TasksContext.Provider value= {{ tasks, dispatch }
// }>
//     { children }
//     </TasksContext.Provider>
//     );
// };

export default AuthContext;