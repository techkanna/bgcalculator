import { Injectable } from "@angular/core";
import { Item } from "../models/Item";
@Injectable({
  providedIn: "root"
})
export class ItemService {
  incomeItems: Item[] = [{ amount: 100, desc: "income One" }];
  expenseItems: Item[] = [
    { amount: 100, desc: "exp One" },
    { amount: 100, desc: "exp two" }
  ];
  constructor() {}
}
