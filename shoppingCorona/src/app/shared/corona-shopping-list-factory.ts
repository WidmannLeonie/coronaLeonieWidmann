import {List, Item, User, Comment} from "./list";


export class CoronaShoppingListFactory {

  static empty():List{
    return new List(
      0,
      '',
      new Date(),
      null,
      [],
      [],
      0,
      0,
      false,

    );
  }

  static fromObject(rawList: any): List{
    return new List(
      rawList.id,
      rawList.name,
      typeof (rawList.due_date)==='string' ? new Date(rawList.due_date) : rawList.due_date,
      rawList.final_sum,
      //rawList.items == [item, item, item, item];
      parseItems(rawList.items),
      rawList.user,
      rawList.user_id,
      rawList.volunteer_id,
      rawList.completed,

    );

    function parseItems(rawItems) {
      let items:Item[] = [];
      if(rawItems){
        for (let item of rawItems){
          items.push(Item.fromObject(item));
        }
      }
      return items;
    }
  }

}
