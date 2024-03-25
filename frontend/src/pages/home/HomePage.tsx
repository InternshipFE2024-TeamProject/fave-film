import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import { MovieGenres } from "../../utils/enums";
import MovieCardContent from "../../components/movie-card-content/MovieCardContent";
import { GET_MOVIES_BY_GENRE } from "../../utils/queries";
import { useMovies } from "../../contexts/movieContext";
import { Movie } from "../../utils/types";
import {
  CardContentRecommandation,
  HomePageContainer,
  CardFilters,
  FilterContainer,
  HomePageComponents,
  LeftContainer,
  MainContainer,
  RightConatiner,
} from "./HomePage.styled";

const HomePage = () => {
  const { movies } = useMovies();
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>();
  const [recommendations, setRecommendations] = useState<Movie[]>([]);

  const { refetch: refetchMoviesByGenre } = useQuery(GET_MOVIES_BY_GENRE, {
    skip: true,
  });

  useEffect(() => {
    if (movies) setDisplayedMovies(movies);
  }, [movies]);

  const handleAddFilter = async (genre: string) => {
    try {
      const { data: filteredMoviesData } = await refetchMoviesByGenre({
        genre: genre,
      });
      if (filteredMoviesData) {
        setDisplayedMovies(filteredMoviesData.movieQuery.moviesByGenre);
      }
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
    }
  };

  const generateRecommendations = () => {
    if (movies.length < 2) {
      return;
    }

    const randomIndices: number[] = [];
    while (randomIndices.length < 2) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    const randomMovies = randomIndices.map((index) => movies[index]);
    setRecommendations(randomMovies);
  };

  useEffect(() => {
    generateRecommendations();
  }, [movies]);

  return (
    <HomePageContainer>
      <HomePageComponents>
        <LeftContainer>
          <FilterContainer>
            <Card>
              <CardFilters>
                <h2>Filters</h2>
                {Object.keys(MovieGenres).map((genreKey) => (
                  <Button
                    key={genreKey}
                    type="secondary"
                    onClickFunction={() =>
                      handleAddFilter(
                        MovieGenres[genreKey as keyof typeof MovieGenres]
                      )
                    }
                  >
                    {MovieGenres[genreKey as keyof typeof MovieGenres]}
                  </Button>
                ))}
              </CardFilters>
            </Card>
          </FilterContainer>
          <MainContainer>
            {displayedMovies &&
              displayedMovies.map((movie: Movie) => (
                <MovieCardContent
                  key={movie.id}
                  movieId={movie.id}
                  picture={movie.imagesUrls[0]}
                  title={movie.title}
                  description={movie.description}
                />
              ))}
          </MainContainer>
        </LeftContainer>
        <RightConatiner>
          {recommendations &&
            recommendations.slice(0, 2).map((movie: Movie) => (
              <Card key={movie.id}>
                <CardContentRecommandation>
                  <img src={movie.imagesUrls[0]} alt="movie-image" />
                  <p>{movie.description}</p>
                </CardContentRecommandation>
              </Card>
            ))}
        </RightConatiner>
      </HomePageComponents>
    </HomePageContainer>
  );
};

export default HomePage;
