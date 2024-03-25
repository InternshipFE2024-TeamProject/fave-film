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
    gap: ${rem(100)};
  }

  @media (min-width: 1280px) {
    gap: ${rem(200)};
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
  display: flex;
  align-items: center;
  flex: 1;
  max-width: ${rem(900)};
  min-width: ${rem(200)};
  max-height: ${rem(50)};

  input {
    width: 100%;
    background-color: ${pallete.PLATINUM};
    padding: ${rem(7)};
    border-radius: ${rem(10)};
    outline: none;

    &:focus {
      border: 2px solid ${pallete.FRENCH_MAUVE};
    }
  }
`;

export const SearchIcon = styled(SearchOutlinedIcon)`
  position: relative;
  position: absolut;
  text: ceter;
  left: ${rem(-30)};
  color: ${pallete.SPACE_CADET};
`;

interface ClearInputProps {
  hidden: boolean;
}

export const ClearInput = styled(ClearIcon)<ClearInputProps>`
  visibility: ${(props) => props.hidden === true && "hidden"};
  position: relative;
  position: absolut;
  text: ceter;
  left: ${rem(-80)};
  color: ${pallete.SPACE_CADET};
`;
