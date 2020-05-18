import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {retry} from "rxjs/operators";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";
import * as decode from 'jwt-decode';
import {List} from "./list";

interface User {
  result: {
    id: number,
    name: string
    email: string,
  }
}

@Injectable()
export class AuthenticationService {
  private api:string = 'http://shoppingcorona.s1710456032.student.kwmhgb.at/api/auth';

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    return this.http.post(`${this.api}/login`, {'email': email, 'password':password});
  }
  public setCurrentUserId(){
    this.http.get<User>(`${this.api}/user`).pipe(retry(3)).subscribe(res=>{
      localStorage.setItem('userId', res.result.id.toString());
    }
    );
  }

public getCurrentUserId(){
  return Number.parseInt(localStorage.getItem('userId'));
}
public setLocalStorage(token: string)
{
  console.log("String token");
  const decodeToken = decode(token);
  localStorage.setItem('token', token);
  localStorage.setItem('userId', decodeToken.user.id);
  localStorage.setItem('isVolunteer', decodeToken.user.isVolunteer);
  localStorage.setItem('completed', decodeToken.list.completed);
  //localStorage.setItem('volunteer_id', decodeToken.list.volunteer_id);
  //console.log(decodeToken.list.volunteer_id);
}
public getUserRole(){
    return Number.parseInt(localStorage.getItem('isVolunteer'));
}
logout(){
  this.http.post(`${this.api}/logout`, {});
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem('isVolunteer');
  localStorage.removeItem('completed');
  //localStorage.removeItem('is_volunteer');

  console.log("logged out");
}
public isLoggedIn(){
    if(!!(localStorage.getItem("token"))){
      let token: string = localStorage.getItem("token");
      const decodedToken = decode(token);
      let expirationDate:Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if(expirationDate < new Date()){
        console.log("token expired");
        localStorage.removeItem("token");
        return false;
      }
      return true;
    }else {
      return false;
    }
}
  isLoggedOut(){
      return !this.isLoggedIn();
  }
  public isVolunteer(){
    return this.getUserRole() === 1;
  }

}

