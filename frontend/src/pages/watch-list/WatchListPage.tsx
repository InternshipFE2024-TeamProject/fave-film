import MovieCardContent from "../../components/movie-card-content/MovieCardContent";
import { useQuery, gql, useMutation } from "@apollo/client";
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

const DELETE_MOVIE = gql`
  mutation DeleteMovie($userId: Int!, $movieId: Int!) {
    userMutation {
      deleteFromWatchList(userId: $userId, movieId: $movieId)
    }
  }
`;

const WatchListPage = () => {
  const [deleteMovie] = useMutation(DELETE_MOVIE, {
    refetchQueries: [GET_MOVIES],
  });

  const handleDelete = (movieId: number) => {
    deleteMovie({
      variables: {
        userId: 1,
        movieId: movieId,
      },
    });
  };

  const { data: dataAdded } = useQuery(GET_MOVIES);

  return (
    <>
      <WatchListContainer>
        <WatchListTitle>WATCHLIST</WatchListTitle>
        <WatchListMovieCollectionContainer>
          {dataAdded &&
            dataAdded.userQuery.user.watchedList.map((movie: IMovie) => (
              <MovieCardContent
                key={movie.id}
                picture={movie.imagesUrls[0]}
                title={movie.title}
                description={movie.description}
                handleButton={() => handleDelete(movie.id)}
              />
            ))}
        </WatchListMovieCollectionContainer>
      </WatchListContainer>
    </>
  );
};

export default WatchListPage;
