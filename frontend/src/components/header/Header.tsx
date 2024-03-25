import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
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
} from "./Header.styled";

const Header = () => {
  const { isAuthenticated } = useAuth();
  const [searchedValue, setSearchedValue] = useState<String>();

  const navigate = useNavigate();
  const redirectToWatchlist = () => {
    navigate("/watchlist");
    location.reload();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchedValue(lowerCase);
    console.log(searchedValue);
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
            />
            <SearchIcon>
              <SearchOutlinedIcon />
            </SearchIcon>
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
