import styled from "styled-components";
import { SPACE_CADET, FRENCH_MAUVE } from "../../utils/Variables";
import { rem } from "../../utils/rem";

interface StyledCardProps {
  variant?: "collection";
}

export const StyledCard = styled.div<StyledCardProps>`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${SPACE_CADET};
  border-radius: ${rem(10)};
  height: fit-content;
  width: 100%;
  padding: ${rem(10)};
  cursor: pointer;
  ${({ variant }) =>
    variant === "collection"
      ? `border-left: ${rem(10)} solid ${FRENCH_MAUVE};`
      : `border-top: ${rem(10)} solid ${FRENCH_MAUVE};`};
`;
