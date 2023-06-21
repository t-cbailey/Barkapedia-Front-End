import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { SingleReviewProps, User } from "../types/CustomTypes";
import "../Styles/styles.css";
import { Box } from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessIcon from '@mui/icons-material/Business';
import { useState, useEffect } from "react";
import getUserByID from "../utils/getUserByID.utils";

export default function SingleReview({ review, fullWidth }: SingleReviewProps) {
  if (!review) {
    return <h3 className="loading">Loading...</h3>;
  }

  const [userData, setUserData] = useState<User | undefined>();
  const [showVerifiedIcon, setShowVerifiedIcon] = useState<boolean>(false);
  const [showBusinessIcon, setShowBusinessIcon] = useState<boolean>(false);

  useEffect(() => {
    getUserByID(review.user_id).then((user) => setUserData(user));
  }, []);

  useEffect(() => {
    if (userData) {
      setShowVerifiedIcon(userData.isVerified);
      setShowBusinessIcon(userData.type === "Business");
    }
  }, [userData]);

  return (
    <Card sx={{ maxWidth: fullWidth ? "100%" : 345 }}>
      <CardHeader
        title={review.title}
        subheader={
          <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
            {review.username}
            {showVerifiedIcon && <VerifiedIcon aria-hidden={false} aria-label="Verified user" />}
            {showBusinessIcon && <BusinessIcon aria-hidden={false} aria-label="Business User" />}
          </Box>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {review.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
