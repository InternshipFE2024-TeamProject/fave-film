import { Star } from "@mui/icons-material";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import { getReviewDate } from "../movie/movie-functions";
import {
  FeedbacFormRatingSection,
  FeedbackFormButtonsContainer,
  FeedbackFormContainer,
  FeedbackFormContent,
  FeedbackFormTitle,
  FeedbackFormWrapper,
  StyledLabel,
} from "./FeedbackForm.styled";
import Input from "./Input";
import { useState } from "react";
import * as pallete from "../../utils/Variables";
import { useParams } from "react-router-dom";

const FeedbackForm = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const dateTime = new Date();
  const formattedDate = dateTime.toISOString();
  const formattedDateTime = formattedDate.slice(0, -1) + "599";

  return (
    <FeedbackFormContainer>
      <Card>
        <FeedbackFormWrapper>
          <FeedbackFormTitle>Review Form</FeedbackFormTitle>
          <FeedbackFormContent>
            <FeedbacFormRatingSection>
              <StyledLabel>Rating</StyledLabel>
              <div style={{ display: "flex", gap: "15px" }}>
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={() => setRating(currentRating)}
                        style={{ display: "none" }}
                      />
                      <Star
                        sx={{
                          fontSize: "50px",
                          gap: "10px",
                          cursor: "pointer",
                          color:
                            currentRating <= (hover || rating)
                              ? pallete.FRENCH_MAUVE
                              : pallete.PLATINUM,
                        }}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(0)}
                      />
                    </label>
                  );
                })}
              </div>
              <p>Rating: {rating}</p>
            </FeedbacFormRatingSection>
            <Input
              label="Date"
              defaultValue={getReviewDate(formattedDateTime)}
              disable={true}
            ></Input>
            <Input label="Comment" disable={false}></Input>
            <FeedbackFormButtonsContainer>
              <Button type="tertiary">Save</Button>
              <Button type="text">Cancel</Button>
            </FeedbackFormButtonsContainer>
          </FeedbackFormContent>
        </FeedbackFormWrapper>
      </Card>
    </FeedbackFormContainer>
  );
};

export default FeedbackForm;
