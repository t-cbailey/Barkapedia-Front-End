import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FeaturesDropdown from "./FeaturesDropdown";
import ParkAddress from "./ParkAddress";
import SizeDropdown from "./SizeDropdown";
import OpeningTimes from "./OpeningTimes";
import { Grid } from "@mui/material";
import AddPhoto from "./AddPhoto";

function CreateNewPark() {
  const [parkName, setParkName] = React.useState("");
  const [parkSize, setParkSize] = React.useState("");
  const [parkDescription, setParkDescription] = React.useState("");
  const [openingTimes, setOpeningTimes] = React.useState({});
  const [parkFeatures, setParkFeatures] = React.useState({});
  const [parkAddress, setParkAddress] = React.useState({});
  const [websiteUrl, setWebsiteUrl] = React.useState("");
  const [image_url, setImageUrl] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const verified = true;
  const business = true;

  const handleParkNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParkName(event.target.value);
  };
  const handleParkDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setParkDescription(event.target.value);
  };
  const handleWebsiteUrlChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWebsiteUrl(event.target.value);
  };
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };
  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  const submissionObj = {
    name: parkName,
    desc: parkDescription,
    size: parkSize,
    features: { ...parkFeatures },
    Opening_hours: { ...openingTimes },
    address: { ...parkAddress },
    image_url: image_url,
    website_url: websiteUrl,
    phone_number: phoneNumber,
  };

  console.log(submissionObj, "<-- submission object");
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <h1>Add a new park</h1>
        {verified === true ? (
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="on"
          >
            <Box sx={{ m: 2 }}>
              <TextField
                id="parkName"
                label="park name"
                variant="standard"
                required={true}
                sx={{ m: 2, width: "50ch" }}
                onChange={handleParkNameChange}
              />

              <TextField
                sx={{ m: 2, width: "50ch" }}
                id="parkDescription"
                label="park description"
                variant="standard"
                multiline
                minRows={1}
                maxRows={6}
                onChange={handleParkDescriptionChange}
              />
              <SizeDropdown parkSize={parkSize} setParkSize={setParkSize} />
              <FeaturesDropdown setParkFeatures={setParkFeatures} />
              <ParkAddress setParkAddress={setParkAddress} />
              {/* <TextField
                id="imageUrl"
                label="image url"
                variant="standard"
                onChange={handleImageUrlChange}
              /> */}
              <AddPhoto />
            </Box>

            {business === true ? (
              <Box>
                <OpeningTimes setOpeningTimes={setOpeningTimes} />

                <Box>
                  <TextField
                    id="website URL"
                    label="website URL"
                    variant="standard"
                    onChange={handleWebsiteUrlChange}
                  />
                  <TextField
                    id="phone number"
                    label="phone number"
                    variant="standard"
                    onChange={handlePhoneNumberChange}
                  />
                </Box>
              </Box>
            ) : null}
          </Box>
        ) : (
          <p>You must be signed in and verified to post add a new park</p>
        )}
      </Grid>
    </>
  );
}

export default CreateNewPark;
