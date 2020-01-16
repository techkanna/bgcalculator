import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { Item } from "src/app/models/Item";
@Component({
  selector: "app-desc-list",
  templateUrl: "./desc-list.component.html",
  styleUrls: ["./desc-list.component.css"]
})
export class DescListComponent implements OnInit {
  incomeItem: Item[] = this.itemService.incomeItems;
  expenseItem: Item[] = this.itemService.expenseItems;

  constructor(private itemService: ItemService) {}

  ngOnInit() {}

  deleteItem(item: Item) {
    this.itemService.result.amount -= item.amount;
    if (item.amount > 0) {
      this.incomeItem = this.incomeItem.filter(it => it.id != item.id);
      this.itemService.incomeItems = this.incomeItem;
    } else {
      this.expenseItem = this.expenseItem.filter(it => it.id != item.id);
      this.itemService.expenseItems = this.expenseItem;
    }
  }
}
