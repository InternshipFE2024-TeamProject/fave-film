import { gql } from "@apollo/client";

export const GET_MOVIES_BY_GENRE = gql`
  query GetMoviesByGenre($genre: String!) {
    movieQuery {
      moviesByGenre(genre: $genre) {
        id
        title
        description
        imagesUrls
        genres
      }
    }
  }
`;
