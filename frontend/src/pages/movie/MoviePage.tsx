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
} from "./Movie.styled";
import { Movie, Review } from "../../utils/types";
import { useState } from "react";
import { IconButton } from "@mui/material";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Star,
  StarBorder,
} from "@mui/icons-material";
import * as pallete from "../../Variables";
import { useParams } from "react-router-dom";
import { MovieDetailComponent } from "./components/MovieDetailComponent";
import { ReviewButton } from "./components/ReviewButton";
import { GET_MOVIE_BY_ID, GET_REVIEW_BY_MOVIE_ID } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import {
  calculateAverageRating,
  getReviewDate,
  getReviews,
} from "./movie-functions";

const MoviePage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [ratingsActive, setRatingsActive] = useState("true");
  const [commentsActive, setCommentsActive] = useState("false");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>No movie ID provided.</div>;
  }
  const parsedId = parseInt(id, 10);
  const { data: dataMovie } = useQuery(GET_MOVIE_BY_ID(parsedId));

  const { data: dataReview } = useQuery(GET_REVIEW_BY_MOVIE_ID(parsedId));

  if (!dataMovie) return;
  const movie: Movie = dataMovie.movieQuery.movie;

  if (!dataReview) return;
  const reviews: Review[] = dataReview.reviewQuery.reviewMovie;
  console.log(reviews);

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
