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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Park } from "../../types/CustomTypes";

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

interface ParksListCardProps {
  park: Park;
}

export default function ParksListCard({ park }: ParksListCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={park.name}
        subheader={park.current_average_rating}
      />
      <CardMedia
        component="img"
        height="194"
        image={park.image_url}
        alt={park.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {park.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Opening Hours</Typography>
          <Typography paragraph>
            <ul>
              <li>{`Monday: ${park.opening_hours.monday}`}</li>
              <li>{`Tuesday: ${park.opening_hours.tuesday}`}</li>
              <li>{`Wednesday: ${park.opening_hours.wednesday}`}</li>
              <li>{`Thursday: ${park.opening_hours.thursday}`}</li>
              <li>{`Friday: ${park.opening_hours.friday}`}</li>
              <li>{`Saturday: ${park.opening_hours.saturday}`}</li>
              <li>{`Sunday: ${park.opening_hours.sunday}`}</li>
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}