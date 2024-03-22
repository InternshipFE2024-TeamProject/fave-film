import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "../button/Button";
import logo from "../../../public/favefilm-high-resolution-logo-transparent.png";
import {
  ComponentsContainer,
  HeaderContainer,
  InputContainer,
  LeftSide,
  LogoContainer,
  SearchIcon,
} from "./Header.styled";
import { useAuth } from "../../contexts/authContext";

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <HeaderContainer>
      <ComponentsContainer>
        <LeftSide>
          <LogoContainer>
            <img src={logo} alt="logo" />
          </LogoContainer>
          <InputContainer>
            <input type="text" placeholder="Search Movie" />
            <SearchIcon>
              <SearchOutlinedIcon />
            </SearchIcon>
          </InputContainer>
        </LeftSide>
        {!isAuthenticated && <Button type="text">Log In</Button>}
        {isAuthenticated && <Button type="primary">Watch List</Button>}
      </ComponentsContainer>
    </HeaderContainer>
  );
};

export default Header;
