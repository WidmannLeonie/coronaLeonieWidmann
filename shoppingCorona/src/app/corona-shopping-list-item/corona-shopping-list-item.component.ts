import { Component, OnInit, Input } from '@angular/core';
import {List} from "../shared/list";
import {AuthenticationService} from "../shared/authentication.service";
import {CoronaShoppingListService} from "../shared/corona-shopping-list.service";
import {CoronaShoppingListFactory} from "../shared/corona-shopping-list-factory";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'a.bs-corona-shopping-list-item',
  templateUrl: './corona-shopping-list-item.component.html',
  styles: []
})


export class CoronaShoppingListItemComponent implements OnInit {
  @Input () list: List;
  //lists: List[] = [];
  takenLists: List[] = [];
  currentUserId= this.authenticationService.getCurrentUserId();
  constructor(
    public authenticationService: AuthenticationService,
    private ls: CoronaShoppingListService,

  ) { }

  ngOnInit() {

  }


  // completeList(list){
  //   if(list.completed == false){
  //     list.completed = true;
  //     this.ls.update(list).subscribe( completedLists => {
  //       this.lists.push(this.list);
  //     });
  //     console.log(list.completed);
  //
  //   }else{
  //     list.completed=false;
  //     this.ls.update(list).subscribe( completedLists => {
  //       this.lists.push(this.list);
  //     });
  //   }
  //}

}
