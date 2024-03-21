import Card from "../../components/card/Card";
import {
  WatchListContainer,
  WatchListMovieCollection,
  WatchListTitle,
} from "./WatchListPage.styled";

const WatchListPage = () => {
  return (
    <>
      <WatchListContainer>
        <WatchListTitle>WATCHLIST</WatchListTitle>
        <WatchListMovieCollection>
          <Card variant="collection">
            <p>movie1</p>
          </Card>
          <Card variant="collection">movie1</Card>
        </WatchListMovieCollection>
      </WatchListContainer>
    </>
  );
};

export default WatchListPage;
