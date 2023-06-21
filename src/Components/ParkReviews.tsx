
import { ReviewProps } from "../types/CustomTypes";
import SingleReview from "./SingleReview";
import "../Styles/card-list.css";
import "../Styles/styles.css"

export default function ParkReviews({ reviews, isLoading }: ReviewProps) {
  if (isLoading) {
    return <h3 className="loading">Loading...</h3>;

  }

  if (!reviews || reviews.length === 0) {
    return <h3>No reviews available</h3>;
  }

  return (
    <>
    {reviews.map((review, index) => {
      if (review.body !== "") {
        return (
          <li className="card-list" key={index}>
            <SingleReview review={review} fullWidth={true} />
          </li>
        );
      } else {
        return null;
      }
    })}
  </>
  );
}
