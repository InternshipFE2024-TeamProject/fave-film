import Card from "../../components/card/Card";
import {
  MovieCardWatchList,
  MovieDetails,
  MovieDetailsDescription,
  MovieDetailsLeft,
  MovieDetailsRight,
  MovieDetailsTitle,
  MoviePicture,
  WatchListContainer,
  WatchListMovieCollectionContainer,
  WatchListTitle,
} from "./WatchListPage.styled";

const WatchListPage = () => {
  return (
    <>
      <WatchListContainer>
        <WatchListTitle>WATCHLIST</WatchListTitle>
        <WatchListMovieCollectionContainer>
          <Card variant="collection">
            <MovieCardWatchList>
              <MoviePicture />
              <MovieDetails>
                <MovieDetailsLeft>
                  <MovieDetailsTitle>Dune</MovieDetailsTitle>
                  <MovieDetailsDescription>
                    A noble family becomes embroiled in a war for control over
                    the galaxy's most valuable asset while its heir becomes
                    troubled by visions of a dark future.
                  </MovieDetailsDescription>
                </MovieDetailsLeft>
                <MovieDetailsRight></MovieDetailsRight>
              </MovieDetails>
            </MovieCardWatchList>
          </Card>
          <Card variant="collection">movie1</Card>
        </WatchListMovieCollectionContainer>
      </WatchListContainer>
    </>
  );
};

export default WatchListPage;
