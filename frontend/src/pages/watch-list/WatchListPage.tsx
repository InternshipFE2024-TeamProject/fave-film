import { useQuery, useMutation } from "@apollo/client";
import MovieCardContent from "../../components/movie-card-content/MovieCardContent";
import { useAuth } from "../../contexts/authContext";
import { Movie } from "../../utils/types";
import {
  GET_USER_BY_ID,
  DELETE_MOVIE_FROM_WATCHLIST,
} from "../../utils/queries";
import {
  WatchListContainer,
  WatchListMovieCollectionContainer,
  WatchListTitle,
} from "./WatchListPage.styled";

const WatchListPage = () => {
  const { userId } = useAuth();

  const [deleteMovie] = useMutation(DELETE_MOVIE_FROM_WATCHLIST, {
    refetchQueries: [GET_USER_BY_ID(userId)],
  });

  const handleDelete = (movieId: number) => {
    deleteMovie({
      variables: {
        userId: 1,
        movieId: movieId,
      },
    });
  };

  const { data: dataAdded } = useQuery(GET_USER_BY_ID(userId));

  return (
    <>
      <WatchListContainer>
        <WatchListTitle>WATCHLIST</WatchListTitle>
        <WatchListMovieCollectionContainer>
          {dataAdded &&
            dataAdded.userQuery.user.watchedList.map((movie: Movie) => (
              <MovieCardContent
                key={movie.id}
                picture={movie.imagesUrls[0]}
                title={movie.title}
                description={movie.description}
                handleButton={() => handleDelete(movie.id)}
                movieId={movie.id}
                isHomePage={false}
              />
            ))}
        </WatchListMovieCollectionContainer>
      </WatchListContainer>
    </>
  );
};

export default WatchListPage;
