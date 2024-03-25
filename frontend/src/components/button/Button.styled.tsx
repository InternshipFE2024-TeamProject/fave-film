import styled from "styled-components";
import * as pallete from "../../utils/Variables";
import { rem } from "../../utils/rem";

interface ButtonProps {
  type: "primary" | "text" | "secondary" | "icon" | "tertiary";
}

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: ${rem(10)};
  font-size: ${rem(12)};
  padding: ${rem(12)};
  background-color: ${(props) =>
    props.type === "primary" && `${pallete.PLATINUM} `};
  background-color: ${(props) => props.type === "secondary" && `transparent`};
  background-color: ${(props) =>
    props.type === "tertiary" && `${pallete.FRENCH_MAUVE} `};
  background-color: ${(props) => props.type === "text" && `transparent`};
  background-color: ${(props) => props.type === "icon" && `transparent`};

  color: ${(props) => props.type === "text" && `${pallete.PLATINUM}`};
  color: ${(props) => props.type === "secondary" && `${pallete.PLATINUM}`};
  color: ${(props) => props.type === "primary" && `${pallete.SPACE_CADET}`};
  color: ${(props) => props.type === "tertiary" && `${pallete.PLATINUM}`};

  border: ${(props) =>
    props.type === "secondary" ? `1px solid ${pallete.PLATINUM}` : "none"};

  &:hover {
    background-color: ${pallete.ULTRA_VIOLET};
    color: ${(props) => props.type === "primary" && `${pallete.PLATINUM}`};
    background-color: ${(props) => props.type === "icon" && "transparent"};
  }

  @media (max-width: 600px) {
    padding: ${rem(10)};
  }
`;
