import { useEffect, useState } from "react";
import getSinglePark from "../utils/getSinglePark.utils";
import { useParams } from "react-router-dom";
import { Park } from "../types/CustomTypes";
import SingleParkCard from "./SingleParkCard";

function SinglePark() {
  const { park_id } = useParams();
  const [singlePark, setSinglePark] = useState<Park>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSinglePark(park_id)
      .then((park) => {
        setSinglePark(park.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching single park", error);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!singlePark) {
    return <p>No data found</p>;
  }

  return (
    <main>
      <SingleParkCard singlePark={singlePark}/>
    </main>
  );
}

export default SinglePark;
