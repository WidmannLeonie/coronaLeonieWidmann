import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CoronaShoppingListComponent } from './corona-shopping-list/corona-shopping-list.component';
import { CoronaShoppingListItemComponent } from './corona-shopping-list-item/corona-shopping-list-item.component';
import { CoronaShoppingListDetailsComponent } from './corona-shopping-list-details/corona-shopping-list-details.component';
import {CoronaShoppingListService} from "./shared/corona-shopping-list.service";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing-module";
import { HomeComponent } from './home/home.component';
import { ListFormComponent } from './list-form/list-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./shared/authentication.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";
import {JwtInterceptorService} from "./shared/jwt-interceptor.service";
import { OpenListsComponent } from './open-lists/open-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    CoronaShoppingListComponent,
    CoronaShoppingListItemComponent,
    CoronaShoppingListDetailsComponent,
    HomeComponent,
    ListFormComponent,
    LoginComponent,
    OpenListsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CoronaShoppingListService, AuthenticationService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
