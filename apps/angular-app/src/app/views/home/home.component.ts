import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from '../../components/main-title/main-title.component';
import { FilterButtonGroupComponent } from '../../components/filter-button-group/filter-button-group.component';
import { WorldCardComponent } from '../../components/world-card/world-card.component';

@Component({
  selector: 'mfee-project-home',
  standalone: true,
  imports: [CommonModule, MainTitleComponent, FilterButtonGroupComponent, WorldCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardData: any;
  cardDataToChild: any;

  reciveWorldInfoEvent(event: any) {
    this.cardData = event.mensaje;
    this.cardDataToChild = event.mensaje
  }
}
