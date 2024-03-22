import Card from "../../components/card/Card";
import StarIcon from "@mui/icons-material/Star";
import { FRENCH_MAUVE } from "../../Variables";

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
} from "./MovieCardContent.styled";

interface MovieCardContentProps {
  picture: string;
  title: string;
  description: string;
}
function MovieCardContent({
  picture,
  title,
  description,
}: MovieCardContentProps) {
  return (
    <Card variant="collection">
      <MovieCardWatchList>
        <MovieDetailsLeft>
          <MoviePicture src={picture} />
          <div>
            <MovieDetailsTitle>{title}</MovieDetailsTitle>
            <MovieDetailsDescription>{description}</MovieDetailsDescription>
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
  );
}

export default MovieCardContent;
