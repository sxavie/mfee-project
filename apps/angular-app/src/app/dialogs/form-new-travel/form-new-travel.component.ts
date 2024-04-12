import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { HomeComponent } from '../../views/home/home.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpComunicationService } from '../../services/http-comunication.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'mfee-project-form-new-travel',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, ReactiveFormsModule, HttpClientModule],
  providers: [HttpComunicationService],
  templateUrl: './form-new-travel.component.html',
  styleUrl: './form-new-travel.component.scss',
})
export class FormNewTravelComponent {
  constructor(private toastr: ToastrService, public _http:HttpComunicationService ,public dialogRef: MatDialogRef<HomeComponent>, @Inject(MAT_DIALOG_DATA) public data: unknown) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  profileForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    category: new FormControl('', [Validators.required, Validators.minLength(5)]),
    url: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      this.toastr.success('your post was created correctly', 'SUCCESS');
      this._http.postData(this.profileForm.value).subscribe()
      this.onNoClick()
    } else {
      this.toastr.error('An error was ocurred while you tried to make a post', 'ERROR');
      console.log(' Algun campo no es valido');
    }
  }
}
