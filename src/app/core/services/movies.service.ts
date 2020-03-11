import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Movie } from "../models/movie.model";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  apiBase: String = "https://api.themoviedb.org/3/";
  api: String = "2c5b24e9895c627d2e1a2cdaf1c2dbe5";

  getNowPlaying() {
    return this.http
      .get<any>(
        `${this.apiBase}movie/now_playing?api_key=${this.api}&language=es&page=1`
      )
      .pipe(map(data => data.results));
  }
  saveMovie(movie: Object) {
    return this.http
      .post<any>("http://localhost:3000/api/movies/addMovie", movie)
      .pipe(map(data => data.results));
  }
  getSavedMovies() {
    return this.http
      .get<any>("http://localhost:3000/api/movies")
      .pipe(map(data => data));
  }
}
