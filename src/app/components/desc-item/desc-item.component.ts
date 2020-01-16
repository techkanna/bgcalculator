import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "src/app/models/Item";
import { ItemService } from "../../services/item.service";
@Component({
  selector: "app-desc-item",
  templateUrl: "./desc-item.component.html",
  styleUrls: ["./desc-item.component.css"]
})
export class DescItemComponent implements OnInit {
  @Input() item: Item[];
  @Input() msg: string;

  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();

  constructor(private itemService: ItemService) {}

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

  delItem(item: Item) {
    this.deleteItem.emit(item);
  }

  showModal(item: Item) {
    this.itemService.uiModal.show = !this.itemService.uiModal.show;
    this.itemService.selectedItem = item;
  }
}
