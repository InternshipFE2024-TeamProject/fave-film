import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import MoviePage from "./pages/movie/MoviePage";
import WatchListPage from "./pages/watch-list/WatchListPage";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
