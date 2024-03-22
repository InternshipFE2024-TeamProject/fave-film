import MovieCardContent from "../../components/movie-card-content/MovieCardContent";
import { data } from "../../movies-data";

import {
  WatchListContainer,
  WatchListMovieCollectionContainer,
  WatchListTitle,
} from "./WatchListPage.styled";

data.forEach((movie: { title: any; description: any; pictures: any[] }) => {
  console.log("Title:", movie.title);
  console.log("Description:", movie.description);
  console.log("First Picture:", movie.pictures[0]);
});

const WatchListPage = () => {
  return (
    <>
      <WatchListContainer>
        <WatchListTitle>WATCHLIST</WatchListTitle>
        <WatchListMovieCollectionContainer>
          {data.map((movie) => (
            <MovieCardContent
              key={movie.id}
              picture={movie.pictures[0]}
              title={movie.title}
              description={movie.description}
            />
          ))}
        </WatchListMovieCollectionContainer>
      </WatchListContainer>
    </>
  );
};

export default WatchListPage;
