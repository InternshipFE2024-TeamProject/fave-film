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
} from "./Movie.styled";
import inception1 from "../../assets/inception/inception1.jpg";
import inception2 from "../../assets/inception/inception2.jpg";
import { movies } from "../../movies-data";
import { Movie, Review } from "../../types";
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

const MoviePage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [ratingsActive, setRatingsActive] = useState(true);
  const [commentsActive, setCommentsActive] = useState(false);
  const images = [inception1, inception2];
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>No ID provided</div>;
  }
  const parsedId = parseInt(id, 10);

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

  console.log(movieReviews);

  const inceptionMovie: Movie[] = movies
    .filter((movie) => movie.id === parsedId)
    .map((movie) => ({
      id: movie.id as number,
      title: movie.title as string,
      description: movie.description as string,
      director: movie.director as string,
      cast: movie.cast as [string],
      pictures: movie.pictures as [string],
      genres: movie.genres as [string],
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
    setCurrentImage(
      //(prevIndex) => (prevIndex + 1) % inceptionMovie[0].pictures.length
      (prevIndex) => (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      //prevIndex === 0 ? inceptionMovie[0].pictures.length - 1 : prevIndex - 1
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRatings = () => {
    setRatingsActive(true);
    setCommentsActive(false);
  };

  const handleComments = () => {
    setRatingsActive(false);
    setCommentsActive(true);
  };

  return (
    <MovieContainer>
      <MovieTitleContainer>{inceptionMovie[0].title}</MovieTitleContainer>
      <MovieImagesContainer>
        <MovieImageArrowsWrapper>
          <IconButton onClick={prevImage}>
            <ArrowBackIosNew sx={{ color: `${pallete.PLATINUM}` }} />
          </IconButton>
          <img src={images[currentImage]} />
          <IconButton onClick={nextImage}>
            <ArrowForwardIos sx={{ color: `${pallete.PLATINUM}` }} />
          </IconButton>
        </MovieImageArrowsWrapper>
      </MovieImagesContainer>
      <MovieDescriptionContainer>
        {inceptionMovie[0].description}
      </MovieDescriptionContainer>
      <MovieDetailComponent title="Genres:" list={inceptionMovie[0].genres} />
      <MovieDetailComponent title="Cast:" list={inceptionMovie[0].cast} />
      <MovieDetailComponent
        title="Director:"
        string={inceptionMovie[0].director}
      />
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
      {ratingsActive && (
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
      {commentsActive && (
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
    </MovieContainer>
  );
};

export default MoviePage;
