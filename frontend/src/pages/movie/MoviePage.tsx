import {
  MovieContainer,
  MovieDescriptionContainer,
  MovieSectionText,
  MovieSectionBorderedItems,
  MovieSectionContainer,
  MovieImageContainer,
  MovieTitleContainer,
  MovieSectionItems,
} from "./Movie.styled";
import inception from "../../assets/inception/inception1.jpg";
import { movies } from "../../movies-data";
import { Movie } from "../../types";

const MoviePage = () => {
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

  console.log(inceptionMovie);

  return (
    <MovieContainer>
      <MovieTitleContainer>{inceptionMovie[0].title}</MovieTitleContainer>
      <MovieImageContainer>
        <img src={inception} />
      </MovieImageContainer>
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
