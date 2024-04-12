import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { FilterButtonGroupComponent } from '../filter-button-group/filter-button-group.component';
import { FormNewTravelComponent } from '../../dialogs/form-new-travel/form-new-travel.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'mfee-project-main-title',
  standalone: true,
  imports: [CommonModule, MatIconModule, FilterButtonGroupComponent],
  templateUrl: './main-title.component.html',
  styleUrl: './main-title.component.scss'
})
export class MainTitleComponent {
  constructor(public dialog: MatDialog){}

  openDialog() {
    this.dialog.open(FormNewTravelComponent, { disableClose: true });
  }
}
