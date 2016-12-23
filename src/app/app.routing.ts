import {RouterModule}       from '@angular/router';
import {HomeComponent}      from './home/home.component';
import {LoginFormComponent} from './login/login-form.component';
import {NotFoundComponent}  from './navbar/not-found.component';

export const routing = RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: 'not-found'}
]);