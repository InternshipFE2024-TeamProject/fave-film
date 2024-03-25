import styled from "styled-components";
import * as pallete from "../../utils/Variables";
import { rem } from "../../utils/rem";

interface ButtonProps {
  type: "primary" | "text" | "secondary" | "icon";
}

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: ${rem(10)};
  font-size: ${rem(10)};

  padding: ${rem(12)};
  padding: ${(props) => props.type === "icon" && `${rem(0)}`};

  background-color: ${(props) =>
    props.type === "primary" && `${pallete.PLATINUM} `};
  background-color: ${(props) => props.type === "secondary" && `transparent`};
  background-color: ${(props) => props.type === "icon" && `transparent`};

  color: ${(props) => props.type === "text" && `${pallete.PLATINUM}`};
  color: ${(props) => props.type === "secondary" && `${pallete.PLATINUM}`};
  color: ${(props) => props.type === "primary" && `${pallete.SPACE_CADET}`};

  border: ${(props) =>
    props.type === "secondary" ? `1px solid ${pallete.PLATINUM}` : "none"};

  &:hover {
    background-color: ${pallete.ULTRA_VIOLET};
    background-color: ${(props) => props.type === "icon" && "transparent"};
  }

  @media (max-width: 600px) {
    font-size: ${rem(14)};
    padding: ${rem(10)};
  }
`;
