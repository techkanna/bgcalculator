import { Injectable } from "@angular/core";
import { Item } from "../models/Item";
@Injectable({
  providedIn: "root"
})
export class ItemService {
  incomeItems: Item[] = [];
  expenseItems: Item[] = [];
  result: number = 100;

  constructor() {}

  updateIncomeItems(amount: number, desc: string): void {
    this.incomeItems.push({ amount, desc });
    console.log("amount" + amount, "result " + this.result);
    this.result += amount;
    console.log("result" + this.result);
  }

  updateExpenseItems(amount: number, desc: string): void {
    this.expenseItems.push({ amount, desc });
  }
}
