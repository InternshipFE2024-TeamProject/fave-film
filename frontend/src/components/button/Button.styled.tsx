import styled from "styled-components";
import * as pallete from "../../Variables";
import { rem } from "../../utils/utils";

interface ButtonProps {
  type: "primary" | "text";
}

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  padding: ${rem(15)};
  background-color: ${(props) =>
    props.type === "text" ? "transparent" : `${pallete.PLATINUM} `};
  border-radius: ${rem(10)};
  color: ${(props) =>
    props.type === "text" ? `${pallete.PLATINUM}` : `${pallete.SPACE_CADET}`};
  font-size: ${rem(16)};

  &:hover {
    background-color: ${pallete.ULTRA_VIOLET};
  }

  @media (max-width: 600px) {
    font-size: ${rem(14)};
    padding: ${rem(10)};
  }
`;
