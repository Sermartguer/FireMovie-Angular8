import { Component, OnInit, AfterViewInit } from "@angular/core";
import Swiper from "swiper";

import { MoviesService } from "../../../core/services/movies.service";

import { Movie } from "../../../core/models/movie.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  swiper: Swiper;
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngAfterViewInit() {
    /*this.moviesService.getNowPlaying().subscribe(movies => {
      for (const d of movies as any) {
        this.movies.push({
          id: d.id,
          title: d.title,
          backdrop: d.backdrop_path,
          poster_path: d.poster_path,
          overview: d.overview,
          vote: d.vote_average
        });
      }
    });*/
  }
  ngOnInit() {
    //this.swiper = new Swiper(".swiper-container", {});
  }
}
