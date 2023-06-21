import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ParksListCardProps } from "../types/CustomTypes";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import "../Styles/card-list.css";
import { Box } from "@mui/system";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ParksListCard({ park, fullWidth }: ParksListCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!park) {
    return <Box>Loading...</Box>;
  }

  return (
    <Card sx={{ maxWidth: "850px", margin: "0 auto" }}>
      <Link className="card-text" key={park.id} to={park.id}>
        <CardHeader title={park.name} />
        <CardContent>
          <StarRating
            rating={park.current_average_rating}
            reviewCount={park.current_review_count}
          />
        </CardContent>
        <CardMedia
          sx={{ height: "50%", width: "100%" }}
          component="img"
          height="194"
          image={park.image_url}
          alt={park.name}
        />
        <CardContent>
        </CardContent>
      </Link>
      <CardActions disableSpacing>
        </CardActions>
    </Card>
  );
}
