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

const Header = () => {
  return (
    <HeaderContainer>
      <ComponentsContainer>
        <LeftSide>
          <LogoContainer>
            <img src={logo} alt="logo" />
          </LogoContainer>
          <InputContainer>
            <input type="text" />
            <SearchIcon>
              <SearchOutlinedIcon />
            </SearchIcon>
          </InputContainer>
        </LeftSide>

        <Button>Log In</Button>
      </ComponentsContainer>
    </HeaderContainer>
  );
};

export default Header;
