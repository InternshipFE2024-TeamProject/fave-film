import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query {
    movieQuery {
      movies {
        id
        title
        description
        imagesUrls
        genres
        director
        cast
      }
    }
  }
`;

export const GET_MOVIE_BY_ID = (id: number) => gql`
  query {
    movieQuery {
      movie(id : ${id}) {
        id
        title
        description
        imagesUrls
        genres
        director
        cast
      }
    }
  }
`;
