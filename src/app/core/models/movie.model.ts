export interface Movie {
  id: number;
  title: String;
  poster_path: String;
  vote: String;
}

export interface MovieMaster {
  id: number;
  idMovie: String;
  title: String;
  poster_path: String;
  vote: String;
}
