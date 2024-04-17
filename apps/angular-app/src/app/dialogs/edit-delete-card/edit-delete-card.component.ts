import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../../views/home/home.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpComunicationService } from '../../services/http-comunication.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mfee-project-edit-delete-card',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, ReactiveFormsModule, HttpClientModule],
  providers: [HttpComunicationService],
  templateUrl: './edit-delete-card.component.html',
  styleUrl: './edit-delete-card.component.scss'
})
export class EditDeleteCardComponent {
  profileForm: FormGroup;
  title: string;

  constructor(
    private toastr: ToastrService,
    public _http: HttpComunicationService,
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.name;

    this.profileForm = new FormGroup({
      id: new FormControl(data.card.id, []),
      title: new FormControl(data.card.title, [Validators.required, Validators.minLength(5)]),
      description: new FormControl(data.card.description, [Validators.required, Validators.minLength(5)]),
      category: new FormControl('', [Validators.required]),
      url: new FormControl(data.card.url, [Validators.required, Validators.minLength(5)])
    });
  }

  onSave() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      this.toastr.success('your post was edited correctly', 'SUCCESS');
      this._http.editData(this.profileForm.value).subscribe();
      this.onNoClick();
    } else {
      this.toastr.error('An error was ocurred while you tried to make a post', 'ERROR');
      console.log(' Error to edit');
    }
  }

  deleteData() {
    this._http.deleteData(this.profileForm.value).subscribe(
      () => {
        this.toastr.success('your post was deleted correctly', 'SUCCESS');
        this.onNoClick();
      },
      (error) => {
        this.toastr.error('An error was ocurred while you tried to delete a post', 'ERROR');
        console.error('Error to delete:', error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
