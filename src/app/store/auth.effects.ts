import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthResponseData {
    email: string,
    expiresIn: string,
    idToken: string,
    localId: string,
    kind: string,
    refreshToken: string,
    registered?: boolean
}

@Injectable()
export class AuthEffects {

    @Effect()
    authLogin = this.actions.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap(({ payload: { email, password }}: AuthActions.LoginStart) => {
            return this.http.post<AuthResponseData>(
                'https://..',
                {
                    email,
                    password,
                    returnSecureToken: true
                }).pipe(
                    map(data => {
                        const exirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
                        return of(new AuthActions.Login({
                            email: data.email,
                            expirationDate: exirationDate,
                            token: data.idToken,
                            userId: data.localId
                        }));
                    }),
                    catchError(error => {
                       return of();
                    })
            );
        })
    );

    @Effect({ dispatch: false })
    authSuccess = this.actions.pipe(
        ofType(AuthActions.LOGIN),
        tap(() => this.router.navigate(['/logged_in'])));

    constructor(private actions: Actions, private http: HttpClient, private router: Router) { }

}
