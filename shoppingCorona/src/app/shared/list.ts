import {Item} from "./item";
export {Item} from "./item";

import {User} from "./user";
import DateTimeFormat = Intl.DateTimeFormat;
export {User} from "./user";

import{Comment} from "./comment";
export {Comment} from"./comment";

export class List {
  constructor(public id: number,
              public name: string,
              public due_date: Date,
              public final_sum: number,
              public item: Item[],
              public user: User[],
              public user_id: number,
              public volunteer_id: number,
              public completed: boolean,
              public comment?: Comment[]
  )
  {}
}
