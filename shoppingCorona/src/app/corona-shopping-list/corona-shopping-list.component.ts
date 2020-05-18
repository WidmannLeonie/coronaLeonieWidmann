import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Item, List} from "../shared/list";
import {CoronaShoppingListService} from "../shared/corona-shopping-list.service";
import {AuthenticationService} from "../shared/authentication.service";
import {CoronaShoppingListFactory} from "../shared/corona-shopping-list-factory";

@Component({
  selector: 'coronaShoppingListService-corona-shopping-list',
  templateUrl: './corona-shopping-list.component.html',
  styles: []
})
export class CoronaShoppingListComponent implements OnInit {
  lists: List[];
  //Initialisierung wird ausgeführt wenn die Komponente geladen wurde
  //hierfür OnInit() - Kompo wird vollständig initialisiert Lifecycle-Hook Angular
  //anstelle des Konstruktors
  //@Output() showDetailsEvent = new EventEmitter<List>();


  constructor(private coronaShoppingListService: CoronaShoppingListService,
              public as: AuthenticationService) {
  }

  ngOnInit() {
    this.coronaShoppingListService.getAll().subscribe(res => this.lists = res);

  }



}


