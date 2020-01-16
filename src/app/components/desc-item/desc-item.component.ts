import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "src/app/models/Item";

@Component({
  selector: "app-desc-item",
  templateUrl: "./desc-item.component.html",
  styleUrls: ["./desc-item.component.css"]
})
export class DescItemComponent implements OnInit {
  @Input() item: Item[];
  @Input() msg: string;
  @Input() i: number;

  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  setClass() {
    return {
      green: this.msg === "inc",
      red: this.msg === "exp"
    };
  }

  mouseEnter(e: any) {
    e.classList.add("see");
  }

  mouseLeave(e: any) {
    e.classList.remove("see");
  }

  delItem(item: Item, parent: any) {
    let custom = parent.id;
    item.id = custom;
    this.deleteItem.emit(item);
  }
}
