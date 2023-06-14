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
import { useState } from "react";
import { Park } from "../types/CustomTypes";
import Box from "@mui/material/Box";
import ParkRating from "./StarRating";

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

interface SingleParkProps {
  singlePark: Park;
}

export default function SingleParkCard({ singlePark }: SingleParkProps) {
  const [expanded, setExpanded] = useState(false);
  console.log(singlePark);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const averageRating = singlePark.current_average_rating;

  return (
    <Card sx={{ maxWidth: 3000 }}>
      <CardHeader
        title={singlePark.name}
        subheader={singlePark.address.city}
        action={
          <ParkRating
            rating={singlePark.current_average_rating}
            reviewCount={singlePark.current_review_count}
          />
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={singlePark.image_url}
        alt={singlePark.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {singlePark.desc}
        </Typography>
        <Box sx={{ display: "grid" }}>
          <Typography variant="body2" color="text.secondary">
            <br />
            <h3>Features</h3>
            {singlePark.features.map((feature) => {
              return (
                <ul>
                  <li>{feature}</li>
                </ul>
              );
            })}
            <h3>Address</h3>
            {singlePark.address.firstLine && (
              <p>{singlePark.address.firstLine}</p>
            )}
            {singlePark.address.secondLine && (
              <p>{singlePark.address.secondLine}</p>
            )}
            {singlePark.address.postCode && (
              <p>{singlePark.address.postCode}</p>
            )}
            {singlePark.address.city && <p>{singlePark.address.city}</p>}
            <a href={singlePark.website_url}>Visit Website</a>
            {}
            <br />
            <a href={`tel:${singlePark.phone_number}`}>
              {singlePark.phone_number}
            </a>
            <h3>Opening Hours</h3>
          </Typography>
        </Box>
        <CardActions>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <ul>
              <li>{`Monday: ${singlePark.opening_hours.monday}`}</li>
              <li>{`Tuesday: ${singlePark.opening_hours.tuesday}`}</li>
              <li>{`Wednesday: ${singlePark.opening_hours.wednesday}`}</li>
              <li>{`Thursday: ${singlePark.opening_hours.thursday}`}</li>
              <li>{`Friday: ${singlePark.opening_hours.friday}`}</li>
              <li>{`Saturday: ${singlePark.opening_hours.saturday}`}</li>
              <li>{`Sunday: ${singlePark.opening_hours.sunday}`}</li>
            </ul>
          </Box>
        </CardActions>
      </CardContent>
      <CardActions disableSpacing>
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
