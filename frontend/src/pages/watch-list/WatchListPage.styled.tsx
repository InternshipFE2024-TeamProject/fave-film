import styled from "styled-components";
import { rem } from "../../utils";

export const WatchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
  //   margin: ${rem(50)};
  margin: ${rem(100)} ${rem(100)} ${rem(100)} ${rem(200)};
  @media (max-width: 600px) {
    margin: ${rem(50)} ${rem(50)} ${rem(50)} ${rem(50)};
  }
`;

export const WatchListTitle = styled.div`
  font-size: ${rem(48)};
`;

export const WatchListMovieCollection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(50)};
  @media (max-height: 500px) {
    gap: ${rem(20)};
  }
`;
