import styled from "styled-components";
import * as pallete from "../../utils/Variables";

import { rem } from "../../utils/rem";

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${rem(100)} ${rem(140)} ${rem(0)} ${rem(25)};

  @media (max-width: 1280px) {
    padding: ${rem(100)} ${rem(60)} ${rem(0)} ${rem(25)};
  }

  @media (max-width: 600px) {
    padding: ${rem(100)} ${rem(10)} ${rem(0)} ${rem(25)};
  }
`;

export const HomePageComponents = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${rem(20)};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  gap: ${rem(40)};

  @media (max-width: 601px) {
    flex-direction: column;
  }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  jusity-content: center;
  font-size: ${rem(12)};

  h2 {
    margin-bottom: ${rem(10)};
    color: ${pallete.FRENCH_MAUVE};
  }

  button {
    min-width: ${rem(90)};
    margin-top: ${rem(20)};
  }

  select {
    background-color: $ ${pallete.PLATINUM};
    color: ${pallete.SPACE_CADET};
    height: ${rem(20)};
    border-radius: ${rem(10)};
    outline: none;
    paddin: ${rem(10)};

    &:focus {
      border: 2px solid ${pallete.FRENCH_MAUVE};
    }

    &:after {
      position: absolute;
      content: "";
      top: 14px;
      right: 10px;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-color: #fff transparent transparent transparent;
    }

    option {
    }
  }

  .select-selected {
    background-color: DodgerBlue;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: ${rem(880)};
  min-width: ${rem(180)};
  gap: ${rem(23)};
  flex-wrap: wrap;

  p {
    font-size: ${rem(14)};
  }
`;

export const RightConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem(10)};

  @media (max-width: 815px) {
    display: none;
  }
`;

export const CardContentRecommandation = styled.div`
  height: ${rem(300)};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${rem(5)};

  img {
    max-width: ${rem(100)};
    object-fir: cover;
  }

  p {
    max-width: ${rem(200)};
    font-size: ${rem(14)};
    text-align: justify;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 9;
    overflow: hidden;
  }

  p::after {
    content: "...";
  }
`;
