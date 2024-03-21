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

export const MovieImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${rem(40)} ${rem(250)} 0 ${rem(250)};
  background-color: rgba(234, 234, 234, 0.05);
  img {
    width: auto;
    min-width: 300px;
    height: auto;
    object-fit: cover;
  }

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
  @media (max-width: 600px) {
    margin: 0 50px 0 50px;
  }

  @media (max-width: 400px) {
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
  @media (max-width: 600px) {
    margin: 0 50px 0 50px;
  }

  @media (max-width: 400px) {
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

  @media (max-width: 400px) {
    flex-wrap: nowrap;
  }
`;

export const MovieSectionBorderedItems = styled.div`
  font-size: 14px;
  margin-left: ${rem(20)};
  border: 1px solid ${pallete.PLATINUM};
  border-radius: 10px;
  padding: ${rem(5)} ${rem(12)} ${rem(5)} ${rem(12)};

  @media (max-width: 880px) {
    margin-top: ${rem(10)};
  }

  @media (max-width: 400px) {
    margin-left: 15px;
    padding: 3px 10px 3px 10px;
  }
`;
