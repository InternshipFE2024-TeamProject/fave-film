import styled from "styled-components";
import { rem } from "../../utils/rem";

export const HomePageContainer = styled.div`
  padding: ${rem(100)} ${rem(60)} ${rem(0)} ${rem(60)};
  width: 100%;
  height: 100vh;
  display: flex;

  @media (max-width: 600px) {
    padding: ${rem(80)} ${rem(10)} ${rem(0)} ${rem(10)};
  }
`;

export const HomePageComponents = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${rem(10)};

  @media (max-width: 600px) {
    gap: ${rem(0)};
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  gap: ${rem(60)};

  @media (max-width: 600px) {
    gap: ${rem(0)};
  }
`;

export const FilterContainer = styled.div`
  display: flex;

  div {
    width: ${rem(100)};
  }
`;

export const CardFilters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    min-width: ${rem(80)};
  }
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(15)};
  max-width: ${rem(900)};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  img {
    max-width: ${rem(80)};
    object-fir: cover;
  }
`;

export const CardMainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightConatiner = styled.div`
  div {
    display: flex;
  }
`;

export const CardContentRecommandation = styled.div`
  display: flex;
  flex-direction: column;

  img {
  }

  p {
    max-width: ${rem(200)};
  }
`;
