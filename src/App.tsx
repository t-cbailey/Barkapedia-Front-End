import Header from "./Components/Header";
import SinglePark from "./Components/SinglePark";
import { Routes, Route } from "react-router-dom";
import ShowParks from "./Components/ShowParks";
import Home from "./Components/Home";
import * as React from "react";
import { Park } from "./types/CustomTypes";
import server from "./Api/api";
import { LatLngTuple } from "leaflet";

function App() {
  const [parks, setParks] = React.useState<Park[]>([]);
  const [queries, setQueries] = React.useState<string>("");
  const parksURL = "/parks" + queries;
  const [mapMarkers, setMapMarkers] = React.useState<
    { position: LatLngTuple; content: string; parkId: string }[]
  >([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [queryString, setQueryString] = React.useState('');

  React.useEffect(() => {
    console.log(parksURL);
    server.get(parksURL).then(({ data }) => {
      setParks(data);
      setMapMarkers(
        data.map((park: Park) => ({
          position: [
            parseFloat(park.location.lat),
            parseFloat(park.location.long),
          ],
          content: park.name,
          parkId: park.id,
        }))
      );
      setIsLoading(false);
    });
  }, [parksURL]);

  const uniqueParks = ["Birmingham", "London"];
  parks.forEach((park) => {
    if (!uniqueParks.includes(park.address.city)) {
      uniqueParks.push(park.address.city);
    }
  });
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home uniqueParks={uniqueParks} setQueryString={setQueryString} />} />
        <Route
          path="/parks"
          element={
            <ShowParks
              setQueries={setQueries} 
              setQueryString={setQueryString}
              queryString={queryString}
              parks={parks}
              mapMarkers={mapMarkers}
              isLoading={isLoading}
            />
          }
        />
        <Route path="/parks/:park_id" element={<SinglePark />} />
      </Routes>
    </>
  );
}

export default App;
