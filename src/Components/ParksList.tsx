import server from "../Api/api";
import { useEffect, useState } from "react";
import ParksListCard from "./ParksListCard";
import { Park } from "../../types/CustomTypes";

function ParksList() {
  const [parks, setParks] = useState<Park[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    server.get(`/parks`).then(({ data }) => {
      setParks(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h2>All Parks</h2>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {parks.map((park) => {
            return (
              <li key={park.id}>
                <ParksListCard park={park} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
export default ParksList;
