import { Route } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FormLoginComponent } from './views/form-login/form-login.component';

export const appRoutes: Route[] = [
    { path: 'categories', component: HomeComponent },
    { path: 'login', component: FormLoginComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: FormLoginComponent }
];
