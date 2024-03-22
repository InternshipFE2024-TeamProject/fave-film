import styled from "styled-components";
import { rem } from "../../utils/rem";

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${rem(100)} ${rem(60)} ${rem(0)} ${rem(60)};

  @media (max-width: 600px) {
    padding: ${rem(80)} ${rem(10)} ${rem(0)} ${rem(10)};
  }
`;

export const HomePageComponents = styled.div`
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
  flex: 1;
  max-width: ${rem(880)};
  min-width: ${rem(180)};
  gap: ${rem(15)};

  @media (max-width: 1400px) {
    max-width: ${rem(680)};
  }

  div {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;

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
  display: flex;
`;

export const CardContentRecommandation = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: ${rem(200)};
    object-fir: cover;
  }

  p {
    max-width: ${rem(200)};
  }
`;
