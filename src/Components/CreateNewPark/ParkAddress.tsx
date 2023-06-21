import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { ParkAddressProps } from "../../types/CustomTypes";

function ParkAddress({ setParkAddress, regex }: ParkAddressProps) {
  const [firstLine, setFirstLine] = React.useState("");
  const [secondLine, setSecondLine] = React.useState("");
  const [postCode, setPostCode] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFirstLine(event.target.value);
  };
  const handleLine2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSecondLine(event.target.value);
  };
  const handlePostcodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPostCode(event.target.value);
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  React.useEffect(() => {
    setParkAddress({
      firstLine: firstLine,
      secondLine: secondLine,
      postCode: postCode,
      city: city,
    });
  }, [firstLine, secondLine, postCode, city]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          borderTop: 1,
          m: 6,
        }}
      >
        <Box sx={{ m: 3 }}>
          <h2>Park address</h2>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "90%",
            flexWrap: "wrap",
          }}
        >
          <TextField
            id="street"
            label="street"
            variant="standard"
            onChange={handleStreetChange}
            sx={{
              m: 1,
              width: "40%",
            }}
          />
          <TextField
            id="line 2"
            label="address line 2"
            variant="standard"
            onChange={handleLine2Change}
            sx={{ m: 1, width: "40%" }}
          />
          <TextField
            error={regex.test(postCode) ? false : true}
            helperText={regex.test(postCode) ? "enter a park name" : null}
            id="post code"
            label="post code"
            required={true}
            variant="standard"
            onChange={handlePostcodeChange}
            sx={{ m: 1, width: "40%" }}
          />
          <TextField
            error={city.length < 1 ? true : false}
            helperText={city.length < 1 ? "enter a city/ town name" : null}
            id="city/town"
            label="city/town"
            variant="standard"
            required
            onChange={handleCityChange}
            sx={{ m: 1, width: "40%" }}
          />
        </Box>
      </Box>
    </>
  );
}
export default ParkAddress;
