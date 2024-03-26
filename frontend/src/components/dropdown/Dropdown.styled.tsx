import styled from "styled-components";
import { SPACE_CADET, PLATINUM, FRENCH_MAUVE } from "../../utils/Variables";
import { rem } from "../../utils/rem";

export const Main = styled("div")`
  font-family: sans-serif;
`;

export const DropDownContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

interface DropDownHeaderProps {
  isOpen: boolean;
}
export const DropDownHeader = styled("div")<DropDownHeaderProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${rem(100)};
  margin-bottom: ${rem(10)};
  border: ${rem(1)} solid ${PLATINUM};
  padding: ${rem(5)};
  border-radius: ${rem(10)};
  font-size: ${rem(14)};

  span {
    text-align: center;
  }

  p {
    text-align: center;
    margin-right: ${rem(10)};
  }

  &::after {
    content: "";
    border: solid ${PLATINUM};
    border-width: 0 ${rem(1)} ${rem(1)} 0;
    display: inline-block;
    padding: ${rem(3)};
    transform: rotate(135deg);
    transition: transform 0.3s ease;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    &::after {
      transform: rotate(45deg);
    }
  `}
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  top: ${rem(200)};
  z-index: 100;
`;

export const DropDownList = styled("ul")`
  display: flex;
  flex-direction:column;
  align-items: center;
  background-color: ${SPACE_CADET};
  box-sizing: border-box;
  color: ${PLATINUM}
  font-size:${rem(14)};

  &:first-child {
    padding-top: ${rem(5)}
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: ${rem(10)};

  &:hover {
    color: ${FRENCH_MAUVE};
  }
`;
