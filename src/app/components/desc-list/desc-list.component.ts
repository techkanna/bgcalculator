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
    this.expenseItem = this.itemService.expenseItems;
    this.incomeItem = this.itemService.incomeItems;
  }
}
