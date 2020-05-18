import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {List, Item} from "../shared/list";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {CoronaShoppingListService} from "../shared/corona-shopping-list.service";
import {CoronaShoppingListFactory} from "../shared/corona-shopping-list-factory";
import {log} from "util";
import {AuthenticationService} from "../shared/authentication.service";
import {Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Component({
  selector: 'ls-corona-shopping-list-details',
  templateUrl: './corona-shopping-list-details.component.html',
  styles: []
})

export class CoronaShoppingListDetailsComponent implements OnInit {
  listToTakeOver: List[] = [];
  takenLists: List[] = [];
  list: List = CoronaShoppingListFactory.empty();
  isVolunteer=this.authenticationService.isVolunteer();
  currentUserId= this.authenticationService.getCurrentUserId();
  constructor(
    private ls: CoronaShoppingListService,
    private router: Router,
    private route: ActivatedRoute,
    public authenticationService: AuthenticationService,
  ){}


  ngOnInit() {
    const params = this.route.snapshot.params;
    this.isVolunteer = this.authenticationService.isVolunteer();
    this.ls.getSingle(params['id']).subscribe(list => {
      this.list = CoronaShoppingListFactory.fromObject(list);
    });

  }


  removeList(){
    if (confirm('Liste löschen?')){
      this.ls.remove(this.list.id)
        .subscribe(res=>this.router
          .navigate(['../'],
            {relativeTo:this.route}));
    }
  }

  takeOverList(takeOverList){
    takeOverList.volunteer_id = this.currentUserId;
    this.ls.takeOver(takeOverList).subscribe();
    this.ls.update(takeOverList).subscribe( overtakenlist => {
      this.listToTakeOver.push(takeOverList);
    });
  }
}
