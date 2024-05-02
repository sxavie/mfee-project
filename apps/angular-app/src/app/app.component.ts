import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FormLoginComponent } from './views/form-login/form-login.component';

@Component({
  standalone: true,
  imports: [RouterModule, HomeComponent, CommonModule, HttpClientModule, MatButtonModule, MatMenuModule, FormLoginComponent ],
  selector: 'mfee-project-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
