import { useEffect, useState } from "react";
import getSinglePark from "../utils/getSinglePark.utils";
import { useParams } from "react-router-dom";
import { Park } from "../types/CustomTypes";

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

  const {
    name,
    desc,
    size,
    current_average_rating,
    current_review_count,
    features,
    opening_hours,
    address,
    location,
    image_url,
    website_url,
    phone_number,
  } = singlePark;

  const openingHoursArray = Object.entries(opening_hours);

  return (
    <main>
      <ul>
        <li>
          <h2>{name}</h2>
          <p>{desc}</p>
          <p>{size}</p>
          <p>{current_average_rating}</p>
          <p>{current_review_count}</p>
          <p>{features}</p>
          <ul>
            {openingHoursArray.map(([day, hours]) => (
              <li key={day}>
                {day}: {hours as string}
              </li>
            ))}
          </ul>
          {address.firstLine && <p>{address.firstLine}</p>}
          {address.secondLine && <p>{address.secondLine}</p>}
          {address.postCode && <p>{address.postCode}</p>}
          {address.city && <p>{address.city}</p>}
          <p>
            Location: {location.lat}, {location.long}
          </p>
          <p>{image_url}</p>
          <p>{website_url}</p>
          <p>{phone_number}</p>
        </li>
      </ul>
    </main>
  );
}

export default SinglePark;
