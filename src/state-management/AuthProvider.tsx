import { ReactNode, useReducer } from 'react';
import authReducer from './reducers/authReducer';
import AuthContext from './contexts/authContext';

// Create a context for the Auth Provider
interface Prop {
    children: ReactNode;
}

// Auth Provider component
const AuthProvider = ({ children }: Prop) => {
    const [user, dispatch] = useReducer(authReducer, '');

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;