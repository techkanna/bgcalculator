import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MainBannerComponent } from "./components/main-banner/main-banner.component";
import { AddAmoundComponent } from "./components/add-amound/add-amound.component";
import { DescListComponent } from "./components/desc-list/desc-list.component";
import { ModalComponent } from "./components/ui_modal/modal.component";
import { DescItemComponent } from './components/desc-item/desc-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBannerComponent,
    AddAmoundComponent,
    DescListComponent,
    ModalComponent,
    DescItemComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
