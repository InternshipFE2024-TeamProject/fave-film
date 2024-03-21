import styled from "styled-components";
import { rem } from "../../utils";

export const WatchListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
  //   margin: ${rem(50)};
  margin: ${rem(100)} ${rem(100)} ${rem(100)} ${rem(200)};
  @media (max-width: 800px) {
    margin: ${rem(50)} ${rem(50)} ${rem(50)} ${rem(50)};
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

export const MovieCardWatchList = styled.div`
  display: flex;
  gap: ${rem(20)};
`;

export const MoviePicture = styled.img`
  width: 60px;
  height: 80px;
  //   object-fit: cover;
`;

export const MovieDetails = styled.div`
  @media (min-width: 1400px) {
    min-width: 1000px;
  }
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const MovieDetailsLeft = styled.div``;

export const MovieDetailsTitle = styled.div`
  font-size: ${rem(24)};
`;
export const MovieDetailsDescription = styled.div`
  font-size: ${rem(14)};
`;
export const MovieDetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const DeleteMovieButton = styled.button`
  font-size: ${rem(10)};
  background-color: rgba(0, 0, 0, 0);
  color: inherit;
  font-family: inherit;
  white-space: nowrap;
  padding: ${rem(5)};
  border-radius: ${rem(5)};

  &:hover {
    background-color: #575c7b;
    cursor: pointer;
  }
`;
