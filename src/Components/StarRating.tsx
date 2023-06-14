import React from "react";
import { Typography, Rating, Box } from "@mui/material";

interface ParkRatingProps {
    rating: number;
    reviewCount: number;
  }

  const ParkRating: React.FC<ParkRatingProps> = ({ rating, reviewCount }) => {
    return (
      <Box sx={{ display: "flex", alignItems: "center"}}>
        <Typography variant="body2" sx={{ marginRight: "8px", marginTop: "3px" }}>
          {rating}
        </Typography>
        <Rating
          name="read-only"
          value={Number(rating.toFixed(1))}
          readOnly
          precision={0.1}
          sx={{}}
        />
        <Typography variant="body2" sx={{ marginLeft: "8px" }}>
          ({reviewCount})
        </Typography>
      </Box>
    );
  };
  
  export default ParkRating;
  