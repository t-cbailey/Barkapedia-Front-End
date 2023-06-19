import ParksListCard from "./ParksListCard";
import { ParksListProps } from "../types/CustomTypes";
import "../Styles/card-list.css";

function ParksList({ parks, isLoading }: ParksListProps) {
  return (
    <>
      <h2>All Parks</h2>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul className="card-list">
          {parks.map((park) => {
            return (
              <li key={park.id} className="card">
                <ParksListCard park={park} fullWidth={true} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ParksList;
