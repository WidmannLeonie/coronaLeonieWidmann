import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";

interface Response {
  response: string;
  result: {
    token: string;
  }
}

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit()
{
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
}

    login() {
    const val = this.loginForm.value;
    if(val.email && val.password){
      this.authenticationService.login(val.email, val.password).subscribe(res => {
        const resObj = res as Response;
        if(resObj.response === "success"){
          this.authenticationService.setLocalStorage(resObj.result.token);
          this.router.navigateByUrl('/');
        }
      });
    }
  }

  isLoggedIn(){
      return this.authenticationService.isLoggedIn();
  }
  logout(){
      this.authenticationService.logout();
  }
}
