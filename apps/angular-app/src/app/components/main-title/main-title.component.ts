import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'mfee-project-main-title',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './main-title.component.html',
  styleUrl: './main-title.component.scss'
})
export class MainTitleComponent {}
