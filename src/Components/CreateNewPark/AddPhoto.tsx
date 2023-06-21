import AddPhotoIcon from "@mui/icons-material/AddAPhoto";
import Fab from "@mui/material/Fab";
import React from "react";

function AddPhoto() {
  const imageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <>
      <Fab
        color="primary"
        aria-label="add-image"
        sx={{ position: "fixed", bottom: 1, right: 1, overflow: "hidden" }}
      >
        <input
          type="file"
          onChange={imageHandler}
          //   accept=".jpg, .jpeg, .png"
          accept="image/*"
          multiple
          style={{
            //make this hidden and display only the icon
            position: "absolute",
            top: "-35px",
            left: 0,
            height: "calc(100% + 36px)",
            width: "calc(100% + 5px)",
            outline: "none",
          }}
        />

        <AddPhotoIcon />
      </Fab>
    </>
  );
}

export default AddPhoto;
