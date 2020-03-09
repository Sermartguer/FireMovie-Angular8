import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { ListviewComponent } from "./components/listview/listview.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [HomeComponent, ListviewComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule]
})
export class HomeModule {}
