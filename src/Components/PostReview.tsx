import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CreateReview from "./CreateReview";
import getSinglePark from "../utils/getSinglePark.utils";
import ParkCardSmall from "./ParkCardSmall";

export default function PostReview() {
  const { park_id } = useParams<{ park_id: string }>();
  const [singlePark, setSinglePark] = useState<Park | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSinglePark(park_id)
      .then((response) => {
        setSinglePark(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching park details", error);
      });
  }, [park_id]);

  return (
    <>
      {singlePark && (
        <CreateReview parkId={park_id} parkName={singlePark.name} />
      )}
    </>
  );
}
