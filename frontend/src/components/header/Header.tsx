import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { useAuth } from "../../contexts/authContext";
import logo from "../../../public/favefilm-high-resolution-logo-transparent.png";
import {
  ComponentsContainer,
  HeaderContainer,
  InputContainer,
  LeftSide,
  LogoContainer,
  SearchIcon,
  ClearInput,
} from "./Header.styled";
import { useSearchContext } from "../../contexts/searchContext";
import { useMovies } from "../../contexts/movieContext";

const Header = () => {
  const { movies } = useMovies();
  const { isAuthenticated } = useAuth();
  const { inputValue, setInputValue, handleSearch, setResults } =
    useSearchContext();

  const navigate = useNavigate();
  const redirectToWatchlist = () => {
    navigate("/watchlist");
    location.reload();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputValue(lowerCase);
  };

  const handleSubmit = () => {
    handleSearch(movies);
  };

  const handleClearInput = () => {
    setInputValue("");
    setResults(movies);
  };

  return (
    <HeaderContainer>
      <ComponentsContainer>
        <LeftSide>
          <LogoContainer>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </LogoContainer>
          <InputContainer>
            <input
              type="text"
              placeholder="Search Movie"
              onChange={(e) => handleInputChange(e)}
              value={inputValue}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
            />
            <Button type="icon" onClickFunction={handleSubmit}>
              <SearchIcon />
            </Button>

            <Button type="icon" onClickFunction={handleClearInput}>
              <ClearInput hidden={inputValue === ""} />
            </Button>
          </InputContainer>
        </LeftSide>
        {!isAuthenticated && <Button type="text">Log In</Button>}
        {isAuthenticated && (
          <Button onClickFunction={redirectToWatchlist} type="primary">
            Watch List
          </Button>
        )}
      </ComponentsContainer>
    </HeaderContainer>
  );
};

export default Header;
