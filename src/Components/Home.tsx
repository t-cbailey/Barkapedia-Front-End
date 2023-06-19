import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

function Home({ uniqueParks, setQueries }) {

  const [value, setValue] = React.useState<string | null>(uniqueParks[0]);
  const [inputValue, setInputValue] = React.useState("");
  let queryString = '';
  const navigate = useNavigate();

  function handleSubmit(){
    setQueries(`?city=${value}`)
    navigate(`/parks`);
  }

  console.log(queryString);
  return (
    <div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={uniqueParks}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Choose city" />}
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Home;
