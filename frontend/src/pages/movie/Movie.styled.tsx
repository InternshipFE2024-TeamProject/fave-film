import styled from "styled-components";
import { rem } from "../../utils";
import * as pallete from "../../Variables";

export const MovieContainer = styled.div`
  display: contents;
`;

export const MovieTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${rem(40)} ${rem(250)} 0 ${rem(250)};

  @media (max-width: 880px) {
    margin: 30px 150px 0 150px;
  }
  @media (max-width: 600px) {
    margin: 20px 50px 0 50px;
  }

  @media (max-width: 400px) {
    margin: 30px 0 0 0;
  }
`;

export const MovieImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${rem(40)} ${rem(250)} 0 ${rem(250)};
  background-color: rgba(234, 234, 234, 0.05);

  @media (max-width: 880px) {
    margin: 30px 150px 0 150px;
  }
  @media (max-width: 660px) {
    margin: 20px 50px 0 50px;
  }

  @media (max-width: 460px) {
    margin: 30px 0 0 0;
  }
`;

export const MovieImageArrowsWrapper = styled.div`
  display: flex;

  img {
    //width: auto;
    min-width: 300px;
    height: auto;
    object-fit: cover;
  }
`;

export const MovieDescriptionContainer = styled.div`
  display: flex;
  font-size: 14px;
  margin: 0 ${rem(250)} 0 ${rem(250)};
  padding: 15px 10px 15px 10px;
  background-color: rgba(234, 234, 234, 0.05);
  border-bottom: 2px solid rgba(234, 234, 234, 0.4);

  @media (max-width: 880px) {
    margin: 0 150px 0 150px;
  }
  @media (max-width: 660px) {
    margin: 0 50px 0 50px;
  }

  @media (max-width: 460px) {
    margin: 0 0 0 0;
  }
`;

export const MovieSectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 ${rem(250)} 0 ${rem(250)};
  padding: 15px 10px 15px 10px;
  background-color: rgba(234, 234, 234, 0.05);
  border-bottom: 2px solid rgba(234, 234, 234, 0.4);

  @media (max-width: 880px) {
    margin: 0 150px 0 150px;
  }
  @media (max-width: 660px) {
    margin: 0 50px 0 50px;
  }

  @media (max-width: 460px) {
    margin: 0 0 0 0;
  }
`;

export const MovieSectionText = styled.div`
  font-size: 14px;

  @media (max-width: 880px) {
    margin-top: ${rem(10)};
  }
`;

export const MovieSectionItems = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 460px) {
    flex-wrap: nowrap;
  }
`;

export const MovieSectionBorderedItems = styled.div`
  font-size: 14px;
  margin-left: ${rem(20)};
  border: 1px solid ${pallete.PLATINUM};
  border-radius: 10px;
  padding: ${rem(5)} ${rem(12)} ${rem(5)} ${rem(12)};

  &:hover {
    background-color: rgba(234, 234, 234, 0.2);
  }

  @media (max-width: 880px) {
    margin-top: ${rem(10)};
  }

  @media (max-width: 460px) {
    margin-left: 15px;
    padding: 3px 10px 3px 10px;
  }
`;
interface ActiveProps {
  active: boolean;
}

export const MovieReviewSection = styled.div`
  font-size: 14px;
  margin: 0 ${rem(250)} 0 ${rem(250)};
  padding: 15px 10px 15px 10px;
  background-color: rgba(234, 234, 234, 0.05);

  @media (max-width: 880px) {
    margin: 0 150px 0 150px;
  }
  @media (max-width: 660px) {
    margin: 0 50px 0 50px;
  }

  @media (max-width: 460px) {
    margin: 0 0 0 0;
  }
`;

interface ActiveProps {
  active: boolean;
}

export const MovieReviewButton = styled.button<ActiveProps>`
  font-size: 14px;
  margin-left: ${rem(20)};
  font-family: inherit;
  color: inherit;
  border: 1px solid ${pallete.PLATINUM};
  border-radius: 10px;
  padding: ${rem(5)} ${rem(12)} ${rem(5)} ${rem(12)};
  background-color: ${(props) =>
    props.active ? "rgba(234, 234, 234, 0.5)" : "rgba(234, 234, 234, 0.05)"};
  color: ${(props) => (props.active ? pallete.RICH_BLACK : pallete.PLATINUM)};

  @media (max-width: 880px) {
    margin-top: ${rem(10)};
  }

  @media (max-width: 460px) {
    margin-left: 15px;
    padding: 3px 10px 3px 10px;
  }
`;

export const MovieReviewItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px 15px 10px;
  background-color: rgba(234, 234, 234, 0.05);
  border-bottom: 2px solid rgba(234, 234, 234, 0.4);
`;

export const MovieReviewUser = styled.div`
  display: flex;
`;

export const MovieReviewRating = styled.div`
  display: flex;
`;

export const MovieReviewComment = styled.div`
  display: flex;
`;

export const MovieReviewDate = styled.div`
  display: flex;
`;
