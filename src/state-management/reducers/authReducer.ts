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

type AuthAction = LoginAction | LogoutAction;


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

export default authReducer;