import {
  CardContentRecommandation,
  CardFilters,
  FilterContainer,
  HomePageComponents,
  LeftContainer,
  MainContainer,
  RightConatiner,
} from "./HomePage.styled";
import { HomePageContainer } from "./HomePage.styled";
import Card from "../../components/card/Card";
import { dummy_data as dummyMovies } from "../../movies-data";
import Button from "../../components/button/Button";
import { MovieGenres } from "../../utils/enums";
import MovieCardContent from "../../components/movie-card-content/MovieCardContent";
import { GET_MOVIES } from "../../utils/queries/getMovies";
import { useQuery } from "@apollo/client";
import { GET_MOVIES_BY_GENRE } from "../../utils/queries/getMoviesByGenre";
import { useEffect, useState } from "react";

interface IMovie {
  id: number;
  title: string;
  description: string;
  imagesUrls: string[];
}

const HomePage = () => {
  const [movies, setMovies] = useState<IMovie[] | null>(null);
  const { data: dataMovie } = useQuery(GET_MOVIES);

  const { refetch: refetchMoviesByGenre } = useQuery(GET_MOVIES_BY_GENRE, {
    skip: true,
  });

  useEffect(() => {
    if (!dataMovie) return;
    const movies: IMovie[] = dataMovie.movieQuery.movies;
    setMovies(movies);
  }, [dataMovie]);

  const handleAddFilter = async (genre: string) => {
    console.log(genre);

    try {
      const { data: filteredMoviesData } = await refetchMoviesByGenre({
        genre: genre,
      });
      if (filteredMoviesData) {
        console.log(filteredMoviesData.movieQuery.moviesByGenre);

        setMovies(filteredMoviesData.movieQuery.moviesByGenre);
      }
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
    }
  };

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
                    onClick={() =>
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
            {movies &&
              movies.map((movie: IMovie) => (
                <MovieCardContent
                  key={movie.id}
                  picture={movie.imagesUrls[0]}
                  title={movie.title}
                  description={movie.description}
                />
              ))}
          </MainContainer>
        </LeftContainer>
        <RightConatiner>
          <Card>
            <CardContentRecommandation>
              <img src={dummyMovies[0].pictures[0]} alt="movie-image" />
              <p>{dummyMovies[0].description}</p>
            </CardContentRecommandation>
          </Card>
        </RightConatiner>
      </HomePageComponents>
    </HomePageContainer>
  );
};

export default HomePage;
