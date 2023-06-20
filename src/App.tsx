import Header from "./Components/Header";
import SinglePark from "./Components/SinglePark";
import { Routes, Route } from "react-router-dom";
import ShowParks from "./Components/ShowParks";
import SignIn from "./Components/SignIn";
import { LoginContext } from "./Context/loginContext";
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState(null);
  return (
    <LoginContext.Provider value={{ email, setEmail }}>
    <>
      <Header />
      <Routes>
        <Route path="/parks" element={<ShowParks />} />
        <Route path="/parks/:park_id" element={<SinglePark />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
      </Routes>
    </>
    </LoginContext.Provider>
  );
}

export default App;
