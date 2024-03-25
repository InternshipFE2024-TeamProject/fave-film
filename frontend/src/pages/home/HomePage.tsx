import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../../utils/queries";

interface IMovie {
  id: number;
  title: string;
  description: string;
}

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  console.log({ loading });
  console.log({ error });
  console.log({ data });

  if (!data) return;
  data.movieQuery.movies.map((movie: IMovie) => console.log(movie));
  return <div>HomePage</div>;
};

export default HomePage;
