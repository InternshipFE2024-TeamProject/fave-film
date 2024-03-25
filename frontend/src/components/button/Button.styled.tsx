import styled from "styled-components";
import * as pallete from "../../utils/Variables";
import { rem } from "../../utils/rem";

interface ButtonProps {
  type: "primary" | "text" | "secondary";
}

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  padding: ${rem(12)};
  border-radius: ${rem(10)};
  font-size: ${rem(10)};
  background-color: ${(props) =>
    props.type === "primary" && `${pallete.PLATINUM} `};
  background-color: ${(props) => props.type === "secondary" && `transparent`};

  color: ${(props) => props.type === "text" && `${pallete.PLATINUM}`};
  color: ${(props) => props.type === "secondary" && `${pallete.PLATINUM}`};
  color: ${(props) => props.type === "primary" && `${pallete.SPACE_CADET}`};

  border: ${(props) =>
    props.type === "secondary" ? `1px solid ${pallete.PLATINUM}` : "none"};

  &:hover {
    background-color: ${pallete.ULTRA_VIOLET};
  }

  @media (max-width: 600px) {
    font-size: ${rem(14)};
    padding: ${rem(10)};
  }
`;
