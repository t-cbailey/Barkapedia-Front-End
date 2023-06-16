import ParksListCard from "./ParksListCard";
import { Park } from "../../types/CustomTypes";

interface ParksListProps {
  parks: Park[];
  isLoading: boolean;
}

function ParksList({ parks, isLoading }: ParksListProps) {
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
                <ParksListCard park={park} fullWidth={false} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ParksList;
