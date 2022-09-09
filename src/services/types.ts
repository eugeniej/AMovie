export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export enum TextLevel {
  H1 = "h1",
  H2 = "h2",
  p = "p",
}

export enum Align {
  left = "left",
  center = "center",
  right = "right",
}

export enum LayoutSizes {
  LARGE = "960px",
  MEDIUM = "560px",
  SMALL = " 420px",
}
