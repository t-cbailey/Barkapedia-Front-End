import Header from "./Components/Header";
import SinglePark from "./Components/SinglePark";
import { Routes, Route } from "react-router-dom";
import ShowParks from "./Components/ShowParks";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/parks" element={<ShowParks />} />
        <Route path="/parks/:park_id" element={<SinglePark />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
