import { Component, OnInit, Input } from "@angular/core";
import { Item } from "src/app/models/Item";

@Component({
  selector: "app-desc-item",
  templateUrl: "./desc-item.component.html",
  styleUrls: ["./desc-item.component.css"]
})
export class DescItemComponent implements OnInit {
  @Input() item: Item[];
  @Input() msg: string;
  taggle: boolean = false;
  constructor() {}

  ngOnInit() {}

  setClass() {
    return {
      green: this.msg === "inc",
      red: this.msg === "exp"
    };
  }

  mouseEnter(e: any) {
    console.log(e);
    this.taggle = true;
    // console.log("true me");
  }

  mouseLeave() {
    this.taggle = false;
    // console.log("false me");
  }

  setDelClass() {
    return {
      del: true,
      see: this.taggle
    };
  }
}
