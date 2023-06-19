import ParksListCard from "./ParksListCard";
import { Park } from "../../types/CustomTypes";
import "../Styles/card-list.css"
import "../Styles/styles.css"

interface ParksListProps {
  parks: Park[];
  isLoading: boolean;
}

function ParksList({ parks, isLoading }: ParksListProps) {
  return (
    <>
      <h2>All Parks</h2>
      {isLoading ? (
        <h3 className="loading">Loading...</h3>
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
