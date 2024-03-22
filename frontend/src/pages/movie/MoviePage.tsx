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
import { reviews } from "../../review-data";
import { useParams } from "react-router-dom";
import { MovieDetailComponent } from "./MovieDetailComponent";
import { ReviewButton } from "./ReviewButton";
import { GET_MOVIE_BY_ID } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const MoviePage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [ratingsActive, setRatingsActive] = useState("true");
  const [commentsActive, setCommentsActive] = useState("false");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>No movie ID provided.</div>;
  }
  const parsedId = parseInt(id, 10);
  const { loading, error, data } = useQuery(GET_MOVIE_BY_ID(parsedId));

  if (!data) return;
  const movie: Movie = data.movieQuery.movie;

  const movieReviews: Review[] = reviews
    .filter((review) => review.movieId === parsedId)
    .map((review) => ({
      id: review.id as number,
      rating: review.rating as number,
      comment: review.comment as string,
      userId: review.userName as string,
      movieId: review.movieId as number,
      date: review.date as string,
    }));

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

  const calculateAverageRating = (ratings: number[]): number => {
    if (ratings.length === 0) {
      return 0;
    }

    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = sum / ratings.length;
    return average;
  };

  const movieRatings: number[] = [];
  movieReviews.map((review: Review) => {
    movieRatings.push(review.rating);
  });
  console.log(movieRatings);

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
            {calculateAverageRating(movieRatings)} / 5
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
            {movieReviews.length > 0 ? (
              movieReviews.map((review, index) => (
                <MovieReviewItemContainer key={index}>
                  <MovieReviewUser>{review.userId}</MovieReviewUser>
                  <MovieReviewRating>
                    {getRating(review.rating)}
                  </MovieReviewRating>
                  <MovieReviewDate>{review.date}</MovieReviewDate>
                </MovieReviewItemContainer>
              ))
            ) : (
              <div>There are no reviews.</div>
            )}
          </MovieReviewSection>
        )}
        {commentsActive === "true" && (
          <MovieReviewSection>
            {movieReviews.length > 0 ? (
              movieReviews.map((review, index) => (
                <MovieReviewItemContainer key={index}>
                  <MovieReviewUser>{review.userId}</MovieReviewUser>
                  <MovieReviewComment>{review.comment}</MovieReviewComment>
                  <MovieReviewDate>{review.date}</MovieReviewDate>
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
