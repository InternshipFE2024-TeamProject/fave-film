export interface Movie {
  id: number;
  title: string;
  description: string;
  imagesUrls: string[];
  genres: [string];
  cast: string[];
  director: string;
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  userId: string;
  movieId: number;
  date: string;
}
