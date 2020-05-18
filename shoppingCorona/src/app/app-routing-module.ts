import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {CoronaShoppingListComponent} from "./corona-shopping-list/corona-shopping-list.component";
import {CoronaShoppingListDetailsComponent} from "./corona-shopping-list-details/corona-shopping-list-details.component";
import {HomeComponent} from "./home/home.component";
import {ListFormComponent} from "./list-form/list-form.component";
import {LoginComponent} from "./login/login.component";
import {OpenListsComponent} from "./open-lists/open-lists.component";

const routes:Routes=[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lists', component: CoronaShoppingListComponent},
  {path: 'lists/:id', component: CoronaShoppingListDetailsComponent},
  {path: 'admin', component: ListFormComponent},
  {path: 'admin/:id', component: ListFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'openLists', component: OpenListsComponent},
  {path: 'openLists/:id', component: CoronaShoppingListDetailsComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers:[]
})
export class AppRoutingModule {}



