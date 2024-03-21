import Card from "../../components/card/Card";
import StarIcon from "@mui/icons-material/Star";
import { FRENCH_MAUVE } from "../../Variables";

import {
  DeleteMovieButton,
  MovieCardWatchList,
  MovieDetails,
  MovieDetailsDescription,
  MovieDetailsLeft,
  MovieDetailsRight,
  MovieDetailsTitle,
  MoviePicture,
  Rating,
  Score,
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
              <div>
                <MoviePicture />
              </div>
              <MovieDetails>
                <MovieDetailsLeft>
                  <MovieDetailsTitle>Dune</MovieDetailsTitle>
                  <MovieDetailsDescription>
                    A noble family becomes embroiled in a war for control over
                    the galaxy's most valuable asset while its heir becomes
                    troubled by visions of a dark future.
                  </MovieDetailsDescription>
                </MovieDetailsLeft>
                <MovieDetailsRight>
                  <Rating>
                    <StarIcon sx={{ color: FRENCH_MAUVE }} />

                    <Score>4.5</Score>
                  </Rating>
                  <DeleteMovieButton>Delete from watchlist</DeleteMovieButton>
                </MovieDetailsRight>
              </MovieDetails>
            </MovieCardWatchList>
          </Card>
        </WatchListMovieCollectionContainer>
      </WatchListContainer>
    </>
  );
};

export default WatchListPage;
