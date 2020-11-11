import { User } from '../models/user.model';
import * as AuthActions from './auth.actions';

export interface State {
    authError: string,
    loading: boolean,
    user: User
}

const initialState: State = {
    authError: null,
    loading: false,
    user: null
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {

        case AuthActions.LOGIN:
            const {email, expirationDate, token, userId} = action.payload;
            const user = new User(email, userId, token, expirationDate);
            return {
                ...state,
                authError: null,
                loading: false,
                user: user
            };

        case AuthActions.LOGIN_FAIL:
            return {
                ...state,
                authError: action.payload,
                loading: false,
                user: null
            };

        case AuthActions.LOGIN_START:
            return {
                ...state,
                authError: null,
                loading: true,
                user: null
            };

        case AuthActions.LOGOUT:
            return {
                ...state,
                authError: null,
                loading: false,
                user: null
            };

        default:
            return state;
    }
}
