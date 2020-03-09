import { Component, OnInit } from "@angular/core";

interface Movies {
  img: string;
  title: string;
}

@Component({
  selector: "app-listview",
  templateUrl: "./listview.component.html",
  styleUrls: ["./listview.component.scss"]
})
export class ListviewComponent implements OnInit {
  movies: Movies[];

  constructor() {}

  ngOnInit() {
    this.movies = [
      {
        img: "kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
        title: "Mad MAx"
      },
      {
        img: "bB42KDdfWkOvmzmYkmK58ZlCa9P.jpg",
        title: "Mad MAx"
      },
      {
        img: "h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
        title: "Mad MAx"
      },
      {
        img: "pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
        title: "Mad MAx"
      }
    ];
  }
}
