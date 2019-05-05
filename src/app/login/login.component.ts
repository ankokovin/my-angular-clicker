import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { User } from '../data-classes/user';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  currentUser : User;
  isLoggedIn : boolean;

  constructor() { }

  ngOnInit() {
    this.currentUser = {"Login":"", "Password":""};
    this.form = new FormGroup(
      {
        "emailFormControl": this.emailFormControl,
        "passwordFornControls": this.passwordFormControl
      }
      );
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('',[
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  logIn(){
    if (this.form.valid){
      console.log('valid');
      this.currentUser = 
      {"Login":this.emailFormControl.value, 
      "Password":this.passwordFormControl.value};
      console.log(this.currentUser);
      //TODO pass this.currentUser to LoginControl
    }else{
      console.log('invalid');
    }
  }
}
