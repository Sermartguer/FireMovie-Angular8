import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MoviesService } from "../../../core/services/movies.service";
import { Movie, MovieMaster } from "../../../core/models/movie.model";

@Component({
  selector: "app-listview",
  templateUrl: "./listview.component.html",
  styleUrls: ["./listview.component.scss"]
})
export class ListviewComponent implements OnInit, AfterViewInit {
  movies: Movie[] = [];
  savedMovies: MovieMaster[] = [];
  constructor(private moviesService: MoviesService) {}

  ngAfterViewInit() {
    this.moviesService.getNowPlaying().subscribe(moviesList => {
      for (const d of moviesList as any) {
        this.movies.push({
          id: d.id,
          title: d.title,
          poster_path: d.poster_path,
          vote: d.vote_average
        });
      }
      for (let index = 0; index < 15; index++) {
        this.movies.pop();
      }
      console.log(this.movies);
    });
    this.getSavedMovies();
  }
  ngOnInit() {}
  onDivClick(movie) {
    console.log(movie);
    this.moviesService.saveMovie(movie).subscribe(res => {
      console.log(res);
      this.getSavedMovies();
    });
  }
  getSavedMovies() {
    this.moviesService.getSavedMovies().subscribe(savedListMovies => {
      console.log(savedListMovies);
      this.savedMovies = [];
      for (const d of savedListMovies as any) {
        let { idMovie, poster_path, title, vote } = d;

        this.savedMovies.push({
          id: d._id,
          idMovie,
          poster_path,
          title,
          vote
        });
      }
    });
  }
}
