import styled from "styled-components";
import { rem } from "../../utils/rem";

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${rem(100)} ${rem(140)} ${rem(0)} ${rem(25)};

  @media (max-width: 1270px) {
    padding: ${rem(100)} ${rem(60)} ${rem(0)} ${rem(25)};
  }

  @media (max-width: 600px) {
    padding: ${rem(80)} ${rem(10)} ${rem(0)} ${rem(10)};
  }
`;

export const HomePageComponents = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${rem(10)};

  //   @media (max-width: 600px) {
  //     gap: ${rem(0)};
  //   }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  gap: ${rem(40)};

  //   @media (max-width: 600px) {
  //     gap: ${rem(0)};
  //   }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: ${rem(10)};

  div {
    width: ${rem(150)};
  }

  button {
    margin-top: ${rem(5)};
  }
`;

export const CardFilters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: ${rem(12)};

  button {
    min-width: ${rem(90)};
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

  p {
    font-size: ${rem(14)};
  }
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