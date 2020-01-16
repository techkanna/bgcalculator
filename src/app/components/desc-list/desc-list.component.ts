import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { Item } from "src/app/models/Item";
@Component({
  selector: "app-desc-list",
  templateUrl: "./desc-list.component.html",
  styleUrls: ["./desc-list.component.css"]
})
export class DescListComponent implements OnInit {
  incomeItem: Item[];
  expenseItem: Item[];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    console.log("from desc List == " + this.itemService.expenseItems);
    console.log("from desc List == " + this.expenseItem);
    this.expenseItem = this.itemService.expenseItems;
    this.incomeItem = this.itemService.incomeItems;
    console.log("from desc List == " + this.itemService.expenseItems);
    console.log("from desc List == " + this.expenseItem);
  }

  deleteItem(item: Item) {
    if (item.amount > 0) {
      this.incomeItem = this.incomeItem.filter((it, i) => i != item.id);
      this.itemService.incomeItems = this.incomeItem;
    } else if (item.amount < 0) {
      this.expenseItem = this.expenseItem.filter((it, i) => i != item.id);
      this.itemService.expenseItems = this.expenseItem;
    }
  }
}
