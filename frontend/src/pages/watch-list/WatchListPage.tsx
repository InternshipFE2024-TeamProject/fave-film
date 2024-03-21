import Card from "../../components/card/Card";
import StarIcon from "@mui/icons-material/Star";
import { FRENCH_MAUVE } from "../../Variables";
import { data } from "../../movies-data";

import {
  DeleteMovieButton,
  MovieCardWatchList,
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

data.forEach((movie: { title: any; description: any; pictures: any[] }) => {
  console.log("Title:", movie.title);
  console.log("Description:", movie.description);
  console.log("First Picture:", movie.pictures[0]);
});

const WatchListPage = () => {
  return (
    <>
      <WatchListContainer>
        <WatchListTitle>WATCHLIST</WatchListTitle>
        <WatchListMovieCollectionContainer>
          {data.map((movie) => (
            <Card variant="collection">
              <MovieCardWatchList>
                <MovieDetailsLeft>
                  <div>
                    <MoviePicture />
                  </div>
                  <div>
                    <MovieDetailsTitle>{movie.title}</MovieDetailsTitle>
                    <MovieDetailsDescription>
                      {movie.description}
                    </MovieDetailsDescription>
                  </div>
                </MovieDetailsLeft>

                <MovieDetailsRight>
                  <Rating>
                    <StarIcon sx={{ color: FRENCH_MAUVE }} />

                    <Score>4.5</Score>
                  </Rating>
                  <DeleteMovieButton>Delete from watchlist</DeleteMovieButton>
                </MovieDetailsRight>
              </MovieCardWatchList>
            </Card>
          ))}
        </WatchListMovieCollectionContainer>
      </WatchListContainer>
    </>
  );
};

export default WatchListPage;
