import Header from "./Components/Header";
import SinglePark from "./Components/SinglePark";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ParksList from "./Components/ParksList";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/parks" element={<ParksList />} />
          <Route path="/parks/:park_id" element={<SinglePark />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;