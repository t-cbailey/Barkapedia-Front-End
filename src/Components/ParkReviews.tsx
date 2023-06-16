import { Review } from '../types/CustomTypes';
import SingleReview from './SingleReview';

interface ReviewProps {
    reviews: Review[];
    isLoading: boolean;
}

export default function ParkReviews({ reviews, isLoading }: ReviewProps) {
    if (isLoading) {
        return <h3>Loading reviews...</h3>
    }

if (!reviews || reviews.length === 0) {
    return <h3>No reviews available</h3>
}

    return (
        <>
              {reviews.map((review) => {
                return (
                  <li key={review.id}>
                    <SingleReview review={review} fullWidth={true} />
                  </li>
                )
              })}
        </>
      );
}