import Header from "./Components/Header";
import SinglePark from "./Components/SinglePark";
import { Routes, Route } from "react-router-dom";
import ParksList from "./Components/ParksList";
import { firebaseSignIn } from "../db/connection";

function App() {

    // To get the below to work, make sure that you have the firebase emulator running and listen.ts running
  // From there, go a POST to http://localhost:9191/api/users/ with the below ...
  // {
  //   "email": "joe@example.com",
  //   "username": "JoeB",
  //   "password": "abc1232",
  //   "type": "consumer"
  // }
  // ... from after this, the auth error should change to be "signed in user_11"

  const email = "joe@example.com";
  const password = "abc1232";
  firebaseSignIn(email, password)
  return (
    <>
      <Header />
        <Routes>
          <Route path="/parks" element={<ParksList />} />
          <Route path="/parks/:park_id" element={<SinglePark />}></Route>
        </Routes>
    </>
  );
}

export default App;