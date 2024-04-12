import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, HomeComponent, CommonModule, HttpClientModule],
  selector: 'mfee-project-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
