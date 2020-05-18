import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-home',
  template: `
    <style>
      .ui.tiny.right.labeled.icon.button{
        margin-top: 5%;
        margin-left: 40%
      }
    </style>
    <div class="ui text container" *ngIf="aS.isLoggedIn()" >
      <button class="ui tiny right labeled icon button" [routerLink]="'/lists'"><i class="shopping basket icon"></i>Get started</button>
    </div>
    <div class="ui text container" *ngIf="!aS.isLoggedIn()" >
      <button class="ui tiny right labeled icon button" [routerLink]="'/login'"><i class="shopping basket icon"></i>Get started</button>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(  public aS: AuthenticationService) { }

  ngOnInit(): void {
  }

}
