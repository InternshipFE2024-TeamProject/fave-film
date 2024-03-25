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

const FeedbackForm = () => {
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
                {[...Array(5)].map((star) => {
                  return <Star sx={{ fontSize: "50px", gap: "10px" }} />;
                })}
              </div>
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
