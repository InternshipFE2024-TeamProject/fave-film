import {
  CardContent,
  CardContentRecommandation,
  CardFilters,
  CardMainContent,
  FilterContainer,
  HomePageComponents,
  LeftContainer,
  MainContainer,
  RightConatiner,
} from "./HomePage.styled";
import { HomePageContainer } from "./HomePage.styled";
import Card from "../../components/card/Card";
import { movies } from "../../movies-data";
import Button from "../../components/button/Button";
import { MovieGenres } from "../../utils/enums";

interface IMovie {
  id: number;
  title: string;
  description: string;
  imagesUrls: string[];
}

const HomePage = () => {
  return (
    <HomePageContainer>
      <HomePageComponents>
        <LeftContainer>
          <FilterContainer>
            <Card>
              <CardFilters>
                <h2>Filters</h2>
                {Object.keys(MovieGenres).map((genreKey) => (
                  <Button key={genreKey} type="secondary">
                    {MovieGenres[genreKey as keyof typeof MovieGenres]}
                  </Button>
                ))}
              </CardFilters>
            </Card>
          </FilterContainer>
          <MainContainer>
            {movies &&
              movies.map((movie) => (
                <Card variant="collection">
                  <CardContent>
                    <img src={movies[0].pictures[0]} alt="" />
                    <CardMainContent>
                      <h2>{movie.title}</h2>
                      <p>{movie.description}</p>
                    </CardMainContent>
                  </CardContent>
                </Card>
              ))}
          </MainContainer>
        </LeftContainer>
        <RightConatiner>
          <Card>
            <CardContentRecommandation>
              <img src={movies[0].pictures[0]} alt="movie-image" />
              <p>{movies[0].description}</p>
            </CardContentRecommandation>
          </Card>
        </RightConatiner>
      </HomePageComponents>
    </HomePageContainer>
  );
};

export default HomePage;
