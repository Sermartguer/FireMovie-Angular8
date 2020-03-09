import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { ListviewComponent } from "./components/listview/listview.component";
import { MaterialModule } from "../material/material.module";
import { SlideComponent } from './components/slide/slide.component';

@NgModule({
  declarations: [HomeComponent, ListviewComponent, SlideComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule]
})
export class HomeModule {}
