import Header from "./Components/Header"
import ParksList from "./Components/ParksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/parks" element={<ParksList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;