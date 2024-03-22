import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query {
    movieQuery {
      movies {
        id
        title
        description
      }
    }
  }
`;
