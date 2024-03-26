import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import * as pallete from "../../utils/Variables";
import { rem } from "../../utils/rem";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${pallete.SPACE_CADET};
  padding: ${rem(40)} ${rem(60)};
  position: fixed;
  z-index: 999;

  @media (max-width: 600px) {
    padding: ${rem(40)} ${rem(10)};
  }
`;

export const ComponentsContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    gap: ${rem(170)};
  }

  @media (min-width: 1280px) {
    gap: ${rem(250)};
  }

  @media (max-width: 810px) {
    gap: ${rem(20)};
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: ${rem(60)};

  @media (max-width: 600px) {
    gap: ${rem(0)};
  }
`;

export const LogoContainer = styled.div`
  img {
    max-width: ${rem(100)};
    object-fit: cover;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  max-width: ${rem(900)};
  min-width: ${rem(180)};
  max-height: ${rem(50)};

  input {
    width: 100%;
    background-color: ${pallete.PLATINUM};
    padding: ${rem(7)} ${rem(10)} ${rem(7)} ${rem(12)};
    border-radius: ${rem(10)};
    outline: none;

    &:focus {
      border: 2px solid ${pallete.FRENCH_MAUVE};
    }
  }

  button {
    position: absolute;
    margin: ${rem(0)};
    padding: ${rem(0)};
    right: ${rem(-20)};
    top: ${rem(2)};
  }
`;

export const SearchIcon = styled(SearchOutlinedIcon)`
  text: center;
  color: ${pallete.SPACE_CADET};
`;

interface ClearInputProps {
  hidden: boolean;
}

export const ClearInput = styled(ClearIcon)<ClearInputProps>`
  position: absolute;
  right: ${rem(55)};
  visibility: ${(props) => props.hidden === true && "hidden"};
  text: center;
  color: ${pallete.SPACE_CADET};
`;
