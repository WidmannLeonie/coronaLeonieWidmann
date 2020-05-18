import { Component } from '@angular/core';
import {List} from "./shared/list";
import {AuthenticationService} from "./shared/authentication.service";


@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  isVolunteer=this.authenticationService.isVolunteer();

  constructor(public authenticationService: AuthenticationService) {  }

  isLoggedIn(){
    return this.authenticationService.isLoggedIn();
  }


  getLoginLabel(){
    if(this.isLoggedIn()){
      return "Logout";
    }else {
      return "Login";
    }
  }
}
