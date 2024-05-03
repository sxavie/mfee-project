import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'mfee-project-form-sign-up',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, ReactiveFormsModule, HttpClientModule],
  providers: [LoginService],
  templateUrl: './form-sign-up.component.html',
  styleUrl: './form-sign-up.component.scss'
})
export class FormSignUpComponent {
  userform: FormGroup;
  title: string;
  usersData: any;
  
  constructor(private router: Router, private _userService: LoginService, private _toastr: ToastrService) {
    this.userform = new FormGroup({
      user: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confPassword: new FormControl('', [Validators.required])
    });
  }

  // ngOnInit() {
  //   this._userService.getUsers().subscribe(data => {
  //     this.usersData = data;
  //     console.log(this.usersData)
  //   });
  // }

  onSave() {
    console.log(this.userform.value)

    // const username = this.userform.value.user;
    // const email = this.userform.value.email;
    const password = this.userform.value.password;
    const confPassword = this.userform.value.confPassword;

    // const user = this.usersData.find(
    //   u => u.user === username && u.password === password
    // );

    if (password === confPassword && this.userform.valid) {
      console.log('Inicio de sesión exitoso');
      this._userService.postNewUser(this.userform.value).subscribe();
      this._toastr.success('new user added', 'SUCCESS');
      this.userform.reset();
    } else {
      this._toastr.error('password is diferent or a field is emplty', 'ERROR');
    }
  }

  onCancel() {
    this.router.navigate(['/login']);
  }
}
