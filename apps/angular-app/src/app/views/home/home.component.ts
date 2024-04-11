import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from '../../components/main-title/main-title.component';

@Component({
  selector: 'mfee-project-home',
  standalone: true,
  imports: [CommonModule, MainTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
