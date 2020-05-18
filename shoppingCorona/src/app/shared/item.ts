import {List} from "./list";

export class Item {
  constructor(public id: number,
              public description: string,
              public amount: number,
              public max_price: number,
  ) {
  }

  static fromObject(rawItem: any): Item {
    return new Item(
      rawItem.id,
      rawItem.description,
      rawItem.amount,
      rawItem.max_price,
    );

  }
}

