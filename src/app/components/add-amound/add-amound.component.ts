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
        const income = this.itemService.incomeItems;
        income.push({
          amount: this.amount,
          desc: this.desc
        });
      } else {
        const expense = this.itemService.expenseItems;
        expense.push({
          amount: this.amount,
          desc: this.desc
        });
      }
    }
  }
}
