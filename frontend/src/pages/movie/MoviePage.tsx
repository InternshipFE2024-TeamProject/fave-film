import {
  MovieContainer,
  MovieDescriptionContainer,
  MovieSectionText,
  MovieSectionBorderedItems,
  MovieSectionContainer,
  MovieImagesContainer,
  MovieTitleContainer,
  MovieSectionItems,
  MovieImageArrowsWrapper,
} from "./Movie.styled";
import inception1 from "../../assets/inception/inception1.jpg";
import inception2 from "../../assets/inception/inception2.jpg";
import { movies } from "../../movies-data";
import { Movie } from "../../types";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import * as pallete from "../../Variables";

const MoviePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [inception1, inception2];

  const inceptionMovie: Movie[] = movies
    .filter((movie) => movie.id === 3)
    .map((movie) => ({
      id: movie.id as number,
      title: movie.title as string,
      description: movie.description as string,
      director: movie.director as string,
      cast: movie.cast as [string],
      pictures: movie.pictures as [string],
      genres: movie.genres as [string],
    }));

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
      <MovieSectionContainer>
        <MovieSectionText>Genres:</MovieSectionText>
        <MovieSectionItems>
          {inceptionMovie[0].genres.map((genre, index) => (
            <MovieSectionBorderedItems key={index}>
              {genre}
            </MovieSectionBorderedItems>
          ))}
        </MovieSectionItems>
      </MovieSectionContainer>
      <MovieSectionContainer>
        <MovieSectionText>Cast:</MovieSectionText>
        <MovieSectionItems>
          {inceptionMovie[0].cast.map((cast, index) => (
            <MovieSectionBorderedItems key={index}>
              {cast}
            </MovieSectionBorderedItems>
          ))}
        </MovieSectionItems>
      </MovieSectionContainer>
      <MovieSectionContainer>
        <MovieSectionText>Director:</MovieSectionText>
        <MovieSectionItems>
          <MovieSectionBorderedItems>
            {inceptionMovie[0].director}
          </MovieSectionBorderedItems>
        </MovieSectionItems>
      </MovieSectionContainer>
      <MovieSectionContainer>
        <MovieSectionBorderedItems>Reviews</MovieSectionBorderedItems>
        <MovieSectionBorderedItems>Comments</MovieSectionBorderedItems>
      </MovieSectionContainer>
    </MovieContainer>
  );
};

export default MoviePage;
