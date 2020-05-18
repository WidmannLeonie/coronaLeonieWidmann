import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Item, List} from "../shared/list";
import {CoronaShoppingListService} from "../shared/corona-shopping-list.service";
import {AuthenticationService} from "../shared/authentication.service";
import {CoronaShoppingListFactory} from "../shared/corona-shopping-list-factory";

@Component({
  selector: 'bs-open-lists',
  templateUrl: './open-lists.component.html',
  styles: []
})
export class OpenListsComponent implements OnInit {
  lists: List[];
  constructor(private coronaShoppingListService: CoronaShoppingListService,
              public as: AuthenticationService) { }

  ngOnInit() {
    this.coronaShoppingListService.getAll().subscribe(res => this.lists = res);

  }

}


