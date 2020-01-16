import { Injectable } from "@angular/core";
import { Item } from "../models/Item";
import { Modal } from "../models/Modal";
import { Result } from "../models/Result";
import { v4 as uuid } from "uuid";
@Injectable({
  providedIn: "root"
})
export class ItemService {
  incomeItems: Item[] = [];
  expenseItems: Item[] = [];
  result: Result = { amount: 0 };
  uiModal: Modal = { show: false };
  selectedItem: Item;

  constructor() {}

  updateIncomeItems(amount: number, desc: string): void {
    this.incomeItems.push({ id: uuid(), amount, desc });
    this.result.amount += amount;
  }

  updateExpenseItems(amount: number, desc: string): void {
    this.expenseItems.push({ id: uuid(), amount, desc });
    this.result.amount += amount;
  }
}
