import { useEffect, useState } from "react";
import getSinglePark from "../utils/getSinglePark.utils";
import { useParams } from "react-router-dom";
import { Park, Review } from "../types/CustomTypes";
import SingleParkCard from "./SingleParkCard";
import getReviews from "../utils/getReviewsByPark.utils";

function SinglePark() {
  const { park_id } = useParams();
  const [singlePark, setSinglePark] = useState<Park>();
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    Promise.all([getSinglePark(park_id), getReviews(park_id)])
      .then(([parkResponse, reviewsResponse]) => {
        setSinglePark(parkResponse.data);
        setIsLoading(false);
        setReviews(reviewsResponse.data);
      })
      .catch((error) => {
        console.log("Error fetching single park or reviews", error);
      });
  }, [park_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!singlePark) {
    return <p>No data found</p>;
  }

  return (
    <main>
      <SingleParkCard
        reviews={reviews}
        singlePark={singlePark}
        isLoading={isLoading}
      />
    </main>
  );
}

export default SinglePark;
