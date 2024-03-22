import styled from "styled-components";
import { rem } from "../../utils/utils";

export const WatchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
  margin: ${rem(0)} ${rem(100)} ${rem(100)} ${rem(200)};
  padding-top: ${rem(150)};

  @media (max-width: 800px) {
    margin: ${rem(0)} ${rem(50)} ${rem(50)} ${rem(50)};
  }
`;

export const WatchListTitle = styled.div`
  font-size: ${rem(48)};
`;

export const WatchListMovieCollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(50)};

  @media (max-height: 500px) {
    gap: ${rem(20)};
  }
`;
