import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";

@Component({
  selector: "app-add-amound",
  templateUrl: "./add-amound.component.html",
  styleUrls: ["./add-amound.component.css"]
})
export class AddAmoundComponent implements OnInit {
  amount: number;
  desc: string;

  constructor(private itemService: ItemService) {}

  ngOnInit() {}

  onSubmit() {
    if (this.amount != 0 || this.amount != null || this.amount != undefined) {
      if (this.amount > 0) {
        this.itemService.updateIncomeItems(this.amount, this.desc);
      } else {
        this.itemService.updateExpenseItems(this.amount, this.desc);
      }
    }
  }
}
