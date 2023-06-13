import Header from "./Components/Header";
import SinglePark from "./Components/SinglePark";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/parks/:park_id" element={<SinglePark />}></Route>
      </Routes>
    </>
  );
}

export default App;
