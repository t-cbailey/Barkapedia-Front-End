import Header from "./Components/Header";
import SinglePark from "./Components/SinglePark";
import { Routes, Route } from "react-router-dom";
import ParksList from "./Components/ParksList";
import ShowParks from "./Components/ShowParks";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/parks" element={<ShowParks />} />
          <Route path="/parks/:park_id" element={<SinglePark />}></Route>
        </Routes>
    </>
  );
}

export default App;