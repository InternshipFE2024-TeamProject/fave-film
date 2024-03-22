import MovieCardContent from "../../components/movie-card-content/MovieCardContent";
import { useQuery, gql } from "@apollo/client";

import {
  WatchListContainer,
  WatchListMovieCollectionContainer,
  WatchListTitle,
} from "./WatchListPage.styled";

const GET_MOVIES = gql`
  {
    userQuery {
      user(id: 1) {
        id
        watchedList {
          id
          title
          description
          imagesUrls
        }
      }
    }
  }
`;
interface IMovie {
  id: number;
  title: string;
  description: string;
  imagesUrls: string[];
}

const WatchListPage = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log({ data });

  return (
    <>
      <WatchListContainer>
        <WatchListTitle>WATCHLIST</WatchListTitle>
        <WatchListMovieCollectionContainer>
          {data &&
            data.userQuery.user.watchedList.map((movie: IMovie) => (
              <MovieCardContent
                key={movie.id}
                picture={movie.imagesUrls[1]}
                title={movie.title}
                description={movie.description}
              />
            ))}
        </WatchListMovieCollectionContainer>
      </WatchListContainer>
    </>
  );
};

export default WatchListPage;
