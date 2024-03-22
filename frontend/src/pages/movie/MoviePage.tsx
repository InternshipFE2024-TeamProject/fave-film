import {
  MovieContainer,
  MovieDescriptionContainer,
  MovieSectionContainer,
  MovieImagesContainer,
  MovieTitleContainer,
  MovieImageArrowsWrapper,
  MovieReviewSection,
  MovieReviewItemContainer,
  MovieReviewUser,
  MovieReviewRating,
  MovieReviewDate,
  MovieReviewComment,
  MovieTitle,
  MovieRating,
  MovieWrapper,
  MovieAddToWatchlist,
} from "./Movie.styled";
import { Movie, Review } from "../../utils/types";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Favorite,
  FavoriteBorder,
  Star,
  StarBorder,
} from "@mui/icons-material";
import * as pallete from "../../Variables";
import { useParams } from "react-router-dom";
import { MovieDetailComponent } from "./components/MovieDetailComponent";
import { ReviewButton } from "./components/ReviewButton";
import {
  ADD_MOVIE_TO_WATCHLIST,
  GET_MOVIE_BY_ID,
  GET_REVIEW_BY_MOVIE_ID,
  GET_USER_BY_ID,
} from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import {
  calculateAverageRating,
  getReviewDate,
  getReviews,
} from "./movie-functions";
import { useAuth } from "../../contexts/authContext";

const MoviePage: React.FC = () => {
  const { userId, isAuthenticated } = useAuth();
  const [currentImage, setCurrentImage] = useState(0);
  const [ratingsActive, setRatingsActive] = useState("true");
  const [commentsActive, setCommentsActive] = useState("false");
  const [isOnWatchedList, setIsOnWatchedList] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>No movie ID provided.</div>;
  }
  const parsedId = parseInt(id, 10);

  const { data: dataUser } = useQuery(GET_USER_BY_ID(userId));
  const { data: dataMovie } = useQuery(GET_MOVIE_BY_ID(parsedId));
  const { data: dataReview } = useQuery(GET_REVIEW_BY_MOVIE_ID(parsedId));
  const [addToWatchlistMutation] = useMutation(
    ADD_MOVIE_TO_WATCHLIST(userId, parsedId)
  );

  useEffect(() => {
    if (!dataUser) return;
    const watchedList: Movie[] = dataUser.userQuery.user.watchedList;
    const watchedListMovies: number[] = watchedList.map(
      (movie: Movie) => movie.id
    );
    const isMovieOnWatchedList: boolean = watchedListMovies.includes(parsedId);

    setIsOnWatchedList(isMovieOnWatchedList);
  }, [dataUser, parsedId]);

  const getRating = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <Star key={i} style={{ color: `${pallete.FRENCH_MAUVE}` }} />
        );
      } else {
        stars.push(<StarBorder key={i} />);
      }
    }
    return stars;
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % movie.imagesUrls.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? movie.imagesUrls.length - 1 : prevIndex - 1
    );
  };

  const handleRatings = () => {
    setRatingsActive("true");
    setCommentsActive("false");
  };

  const handleComments = () => {
    setRatingsActive("false");
    setCommentsActive("true");
  };

  const handleAddToWatchlist = () => {
    addToWatchlistMutation();
    setIsOnWatchedList((prevState) => !prevState);
    console.log("MERGE");
  };

  if (!dataMovie || !dataReview || !dataUser) return null;

  const movie: Movie = dataMovie.movieQuery.movie;
  const reviews: Review[] = dataReview.reviewQuery.reviewMovie;

  return (
    <MovieContainer>
      <MovieWrapper>
        <MovieTitleContainer>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieRating>
            <Star
              style={{ color: `${pallete.FRENCH_MAUVE}`, fontSize: "35px" }}
            />
            {calculateAverageRating(getReviews(reviews))} / 5
          </MovieRating>
        </MovieTitleContainer>

        <MovieImagesContainer>
          <MovieImageArrowsWrapper>
            <IconButton onClick={prevImage}>
              <ArrowBackIosNew sx={{ color: `${pallete.PLATINUM}` }} />
            </IconButton>
            <img src={movie.imagesUrls[currentImage]} alt={movie.title} />
            <IconButton onClick={nextImage}>
              <ArrowForwardIos sx={{ color: `${pallete.PLATINUM}` }} />
            </IconButton>
          </MovieImageArrowsWrapper>
        </MovieImagesContainer>

        <MovieDescriptionContainer>
          {movie.description}
        </MovieDescriptionContainer>

        <MovieDetailComponent title="Genres:" list={movie.genres} />
        <MovieDetailComponent title="Cast:" list={movie.cast} />
        <MovieDetailComponent title="Director:" string={movie.director} />

        <MovieSectionContainer>
          <ReviewButton
            active={ratingsActive}
            func={handleRatings}
            title="Ratings"
          />
          <ReviewButton
            active={commentsActive}
            func={handleComments}
            title="Comments"
          />
          <MovieAddToWatchlist>
            {isAuthenticated && (
              <IconButton
                onClick={handleAddToWatchlist}
                disabled={isOnWatchedList}
              >
                {isOnWatchedList ? (
                  <Favorite sx={{ color: pallete.FRENCH_MAUVE }} />
                ) : (
                  <FavoriteBorder sx={{ color: pallete.PLATINUM }} />
                )}
              </IconButton>
            )}
          </MovieAddToWatchlist>
        </MovieSectionContainer>

        {ratingsActive === "true" && (
          <MovieReviewSection>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <MovieReviewItemContainer key={index}>
                  <MovieReviewUser>
                    {review.user.firstName} {review.user.lastName}
                  </MovieReviewUser>
                  <MovieReviewRating>
                    {getRating(review.rating)}
                  </MovieReviewRating>
                  <MovieReviewDate>
                    {getReviewDate(review.date)}
                  </MovieReviewDate>
                </MovieReviewItemContainer>
              ))
            ) : (
              <div>There are no reviews.</div>
            )}
          </MovieReviewSection>
        )}

        {commentsActive === "true" && (
          <MovieReviewSection>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <MovieReviewItemContainer key={index}>
                  <MovieReviewUser>
                    {review.user.firstName} {review.user.lastName}
                  </MovieReviewUser>
                  <MovieReviewComment>{review.comment}</MovieReviewComment>
                  <MovieReviewDate>
                    {getReviewDate(review.date)}
                  </MovieReviewDate>
                </MovieReviewItemContainer>
              ))
            ) : (
              <div>There are no reviews.</div>
            )}
          </MovieReviewSection>
        )}
      </MovieWrapper>
    </MovieContainer>
  );
};

export default MoviePage;
