import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { HomeProps } from "../types/CustomTypes";

function Home({ uniqueParks, setQueries, setCity }: HomeProps) {
  const [value, setValue] = React.useState<string | null>(uniqueParks[0]);
  const [inputValue, setInputValue] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    setQueries(`?city=${value}`);
    setCity(`?city=${value}`);
    navigate(`/parks`);
  };

  return (
    <div>
      <br />
      <Autocomplete
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue === "Any" ? "" : newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="city-dropdown"
        options={uniqueParks}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Choose city" />}
      />
      <Button variant="outlined" onClick={handleSubmit}>
        Go
      </Button>
    </div>
  );
}

export default Home;
