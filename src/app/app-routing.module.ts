import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoggedOutComponent } from "./components/logged-out/logged-out.component";
import { LogoutComponent } from './components/logout/logout.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SecuredContentComponent } from './components/secured-content/secured-content.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'not_authorized', component: NotAuthorizedComponent },
    { path: 'not_found', component: NotFoundComponent },
    { path: 'logged_in', component: LoggedInComponent },
    { path: 'logged_out', component: LoggedOutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'secured_content', component: SecuredContentComponent },
    { path: '**', redirectTo: '/not_found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
