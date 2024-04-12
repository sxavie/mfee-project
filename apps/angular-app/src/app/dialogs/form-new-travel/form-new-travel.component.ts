import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { HomeComponent } from '../../views/home/home.component';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'mfee-project-form-new-travel',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule],
  templateUrl: './form-new-travel.component.html',
  styleUrl: './form-new-travel.component.scss'
})
export class FormNewTravelComponent {
  constructor(public dialogRef: MatDialogRef<HomeComponent>, @Inject(MAT_DIALOG_DATA) public data:unknown) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
