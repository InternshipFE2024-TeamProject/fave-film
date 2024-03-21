import styled from "styled-components";
import { SPACE_CADET, FRENCH_MAUVE } from "../../Variables";
import { rem } from "../../utils";

export const WatchListContainer = styled.div`
  gap: ${rem(30)};
`;

export const WatchListTitle = styled.div`
  font-size: ${rem(48)};
`;

export const WatchListMovieCollection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
`;
