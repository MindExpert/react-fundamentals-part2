import { ReactNode, useReducer } from 'react';
import AuthContext from './authContext';

interface Action {
    type: 'LOGIN' | 'LOGOUT';
};

interface LoginAction extends Action {
    type: 'LOGIN';
    username: string;
};

interface LogoutAction extends Action {
    type: 'LOGOUT';
};

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
    switch (action.type) {
        case 'LOGIN':
            return action.username;
        case 'LOGOUT':
            return '';
        default:
            return state;
    }
};

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