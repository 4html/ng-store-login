import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import * as fromApp from './store/app.reducer';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SecuredContentComponent } from './components/secured-content/secured-content.component';
import { AuthEffects } from './store/auth.effects';
import { LoggedInComponent } from './components/logged-in/logged-in.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        LogoutComponent,
        NotAuthorizedComponent,
        NotFoundComponent,
        SecuredContentComponent,
        LoggedOutComponent,
        LoggedInComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        EffectsModule.forRoot([AuthEffects]),
        StoreModule.forRoot(fromApp.appReducer)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
