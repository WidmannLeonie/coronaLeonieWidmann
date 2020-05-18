import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListFormErrorMessages} from "./list-form-error-messages";
import {FormArray} from "@angular/forms";
import {CoronaShoppingListFactory} from "../shared/corona-shopping-list-factory";
import {CoronaShoppingListService} from "../shared/corona-shopping-list.service";
import {List, Item, User} from "../shared/list";
import {identifierModuleUrl} from "@angular/compiler";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'ls-list-form',
  templateUrl: './list-form.component.html',
  styles: []
})

export class ListFormComponent implements OnInit {
  listForm: FormGroup;
  list = CoronaShoppingListFactory.empty();
  errors:  {[key: string]:string} ={};
  isUpdatingList = false;
  item: FormArray;
  currentUserId= this.aS.getCurrentUserId();


  constructor(private fb: FormBuilder,
              private ls: CoronaShoppingListService,
              private route: ActivatedRoute,
              private router: Router,
              private aS: AuthenticationService) { }


  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    if(id){
      this.isUpdatingList = true;
      this.ls.getSingle(id).subscribe(list=>{
        this.list= CoronaShoppingListFactory.fromObject(list);
      this.initList();
      });
    }
    this.initList();
  }

  initList(){
    this.buildListArray();
    this.listForm=this.fb.group({
      id: this.list.id,
      name: [this.list.name, Validators.required],
      due_date: this.list.due_date,
      final_sum: this.list.final_sum,
      item: this.item,
      completed: this.list.completed,
    });
    this.listForm.statusChanges.subscribe(()=>
    this.updateErrorMessages());
  }

  buildListArray(){
    this.item = this.fb.array([]);

    for(let i of this.list.item){
      this.item.push(this.fb.group({
        id: this.fb.control(i.id),
        description: this.fb.control(i.description),
        amount: this.fb.control(i.amount),
        max_price: this.fb.control(i.max_price),
      }));
    }


    this.item = this.fb.array(
      this.list.item.map(t => this.fb.group({
        id: this.fb.control(t.id),
        description: this.fb.control(t.description),
        amount: this.fb.control(t.amount),
        max_price: this.fb.control(t.max_price),
      }))
    );

  }
  addListItemControl(){
    this.item.push(this.fb.group({id: null, description: null, amount: null, max_price: null, completed: null}))
  }
  submitForm(){

    let list: List = this.listForm.value;
    list.item = this.listForm.value.item;
    if(this.isUpdatingList) {
      this.ls.update(list).subscribe(res => {
        this.router.navigate(['../../lists.id'], {
          relativeTo: this.route
        });
      });
    }else{
      list.user_id = this.currentUserId;
      console.log(list.due_date);
        this.ls.create(list).subscribe(res=> {
          console.log(res);
          this.list = CoronaShoppingListFactory.empty();
          this.listForm.reset(CoronaShoppingListFactory.empty());
          this.router.navigate(['../lists'], {relativeTo: this.route});
        });
    }
   }

  updateErrorMessages(){
    this.errors= {};
    for(const message of ListFormErrorMessages){
      const control=this.listForm.get(message.forControl);
      if(control &&
      control.dirty &&
      control.invalid &&
      control.errors[message.forValidator] &&
      !this.errors[message.forControl]){
        this.errors[message.forControl]=message.text;
      }
    }
  }


}
