import { Component, OnInit } from '@angular/core';
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
  selector: 'mfee-project-form-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, ReactiveFormsModule, HttpClientModule],
  providers: [LoginService],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent implements OnInit{
  userform: FormGroup;
  title: string;
  usersData: any;
  
  constructor(private router: Router, private _userService: LoginService, private _toastr: ToastrService) {
    this.userform = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this._userService.getUsers().subscribe(data => {
      this.usersData = data;
      console.log(this.usersData)
    });
  }

  onSave() {
    console.log(this.userform.value)

    const username = this.userform.value.user;
    const password = this.userform.value.password;

    const user = this.usersData.find(
      u => u.user === username && u.password === password
    );
    if (user) {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/categories']);
      this._toastr.success('user login successfull', 'SUCCESS');
    } else {
      this._toastr.error('incorrect credentials or a form file is emplty', 'ERROR');
    }
  }

  onSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
