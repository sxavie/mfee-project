import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from '../../components/main-title/main-title.component';

import { WorldCardComponent } from '../../components/world-card/world-card.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'mfee-project-home',
  standalone: true,
  imports: [CommonModule, MainTitleComponent, WorldCardComponent, MatMenuModule, MatButtonModule, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardData: any;
  cardDataToChild: any;
  constructor(private router: Router) {}

  reciveWorldInfoEvent(event: any) {
    this.cardData = event.mensaje;
    this.cardDataToChild = event.mensaje;
  }

  navTo(route) {
    this.router.navigate(['/login']);
    switch (route) {
      case 'login':
        console.log('to login');
        this.router.navigate(['/login']);
        break;
      case 'categories':
        console.log('to categories');
        this.router.navigate(['/categories']);
        break;
      case 'categories-list':
        console.log('to categories list');
        this.router.navigate(['/categories-list']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }
}
