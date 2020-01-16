import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";

@Component({
  selector: "app-main-banner",
  templateUrl: "./main-banner.component.html",
  styleUrls: ["./main-banner.component.css"]
})
export class MainBannerComponent implements OnInit {
  result: number = 0;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    console.log(
      "from-banner---this.itemService.result" + this.itemService.result
    );
    console.log("from-banner---result" + this.result);
    this.result = this.itemService.result;
    console.log(
      "from-banner---this.itemService.result" + this.itemService.result
    );
    console.log("from-banner---result" + this.result);
  }
}
