import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../../core/models/movie.model";

@Component({
  selector: "app-slide",
  templateUrl: "./slide.component.html",
  styleUrls: ["./slide.component.scss"]
})
export class SlideComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}
  ngOnInit() {
    console.log(this.movie);
  }
}
