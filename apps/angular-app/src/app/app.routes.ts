import { Route } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FormLoginComponent } from './views/form-login/form-login.component';
import { FormSignUpComponent } from './views/form-sign-up/form-sign-up.component';
import { CategoriesComponent } from './views/categories/categories.component';

export const appRoutes: Route[] = [
    { path: 'categories', component: HomeComponent },
    { path: 'categories-list', component: CategoriesComponent },
    { path: 'login', component: FormLoginComponent },
    { path: 'sign-up', component: FormSignUpComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: FormLoginComponent }
];
