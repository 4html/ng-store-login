import { Action } from '@ngrx/store';

export const LOGIN = '[auth] Login';
export const LOGIN_START = '[auth] Login Start';
export const LOGIN_FAIL = '[auth] Login Fail';
export const LOGOUT = '[auth] Logout';

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: {
        email: string;
        userId: string;
        token: string;
        expirationDate: Date;
    }) { }
}

export class LoginStart implements Action {
    readonly type = LOGIN_START;
    constructor(public payload: { email: string, password: string }) { }
}

export class LoginFail implements Action {
    readonly type = LOGIN_FAIL;
    constructor(public payload: string) { }
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export type AuthActions = Login | LoginStart | LoginFail | Logout;
