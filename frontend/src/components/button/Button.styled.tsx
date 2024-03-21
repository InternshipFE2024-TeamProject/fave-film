import styled from "styled-components";
import * as pallete from "../../Variables";
import { rem } from "../../utils";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
    padding: ${rem(15)};
    background-color: transparent;
    border-radius: ${rem(10)};
    color: ${pallete.PLATINUM};
    font-size: ${rem(16)};
    &:hover {
      background-color: ${pallete.ULTRA_VIOLET};
  }
`;
