import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { AboutUsComponent } from '../views/about-us/about-us.component';
import { OperationsFormComponent } from '../views/operations-form/operations-form.component';
import { DirectivesComponent } from '../views/directives/directives.component';
import { PipesComponent } from '../views/pipes/pipes.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'operations', component: OperationsFormComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }