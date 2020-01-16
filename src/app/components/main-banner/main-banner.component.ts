import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
import { Result } from "src/app/models/Result";

@Component({
  selector: "app-main-banner",
  templateUrl: "./main-banner.component.html",
  styleUrls: ["./main-banner.component.css"]
})
export class MainBannerComponent implements OnInit {
  result: Result = this.itemService.result;

  constructor(private itemService: ItemService) {}

  ngOnInit() {}
  getClass() {
    return {
      red: this.result.amount < 0,
      green: this.result.amount > 0
    };
  }
}
