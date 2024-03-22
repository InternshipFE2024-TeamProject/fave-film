import { Review } from "../../utils/types";

export const calculateAverageRating = (ratings: number[]): number => {
  if (ratings.length === 0) {
    return 0;
  }

  const sum = ratings.reduce((acc, rating) => acc + rating, 0);
  const average = sum / ratings.length;
  return average;
};

export const getReviews = (reviews: Review[]) => {
  const movieRatings: number[] = [];
  reviews.map((review: Review) => {
    movieRatings.push(review.rating);
  });

  return movieRatings;
};

export const getReviewDate = (date: string) => {
  const [datePart] = date.split("T");
  return datePart;
};
