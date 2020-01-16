import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../services/item.service";
@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  editAmount = this.itemService.selectedItem.amount;
  editDesc = this.itemService.selectedItem.desc;

  constructor(private itemService: ItemService) {}
  ngOnInit() {}

  toggleModal(e: any) {
    if (e.target.id === "ui-modal") {
      this.itemService.uiModal.show = !this.itemService.uiModal.show;
    }
  }

  onSubmit() {
    if (this.editAmount > 0) {
      this.itemService.incomeItems.forEach(item => {
        if (item.id === this.itemService.selectedItem.id) {
          this.itemService.result.amount -= item.amount;
          item.amount = this.editAmount;
          item.desc = this.editDesc;
          this.itemService.result.amount += item.amount;
        }
      });
    } else {
      this.itemService.expenseItems.forEach(item => {
        if (item.id === this.itemService.selectedItem.id) {
          this.itemService.result.amount -= item.amount;
          item.amount = this.editAmount;
          item.desc = this.editDesc;
          this.itemService.result.amount += item.amount;
        }
      });
    }
    this.itemService.uiModal.show = !this.itemService.uiModal.show;
  }
}
