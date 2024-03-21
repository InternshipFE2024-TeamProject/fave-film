import Card from "../../components/card/Card";
import {
  WatchListMovieCollection,
  WatchListTitle,
} from "./WatchListPage.styled";

const WatchListPage = () => {
  return (
    <>
      <WatchListTitle>WATCHLIST</WatchListTitle>
      <WatchListMovieCollection>
        <Card variant="collection">movie1</Card>
        <Card variant="collection">movie1</Card>
      </WatchListMovieCollection>
    </>
  );
};

export default WatchListPage;
