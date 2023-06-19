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
import { useState } from "react";
import { Park, Review } from "../types/CustomTypes";
import Box from "@mui/material/Box";
import ParkRating from "./StarRating";
import Map from "./Map";
import { LatLngTuple } from "leaflet";
import ParkReviews from "./ParkReviews";
import "../Styles/styles.css"

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
  reviews: Review[];
  isLoading: boolean;
}

export default function SingleParkCard({ singlePark, reviews, isLoading }: SingleParkProps) {
  const [expanded, setExpanded] = useState(false);
  const [parks, setParks] = React.useState<Park[]>([]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const parsedLat = parseFloat(singlePark.location.lat);
  const parsedLong = parseFloat(singlePark.location.long);

  const parsedCenter: LatLngTuple = [parsedLat, parsedLong];
  const mapMarkers = [
    {
      position: [parsedLat, parsedLong] as LatLngTuple,
      content: singlePark.name,
    },
  ];

  if (isLoading) {
    return <h3 className="loading">Loading...</h3>;
  }

  return (
    <Card sx={{ maxWidth: 3000 }}>
      <CardHeader title={singlePark.name} subheader={singlePark.address.city} />
      <CardContent>
        <ParkRating
          rating={singlePark.current_average_rating}
          reviewCount={singlePark.current_review_count}
        />
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image={singlePark.image_url}
        alt={singlePark.name}
      />
      <CardContent>
        <Map
          center={parsedCenter}
          markers={mapMarkers}
          parks={parks}
          isListView={false}
        />
        <Typography variant="body2" color="text.secondary">
          {singlePark.desc}
        </Typography>
        <Box>
          <Typography variant="body2" color="text.secondary">
            <br />

            {singlePark.features.isFree && <span>Free</span>}
            <br />
    {singlePark.features.isWellLit && <span>Well Lit <br /></span>}
    {singlePark.features.isParking && <span>Parking<br /></span>}
    {singlePark.features.isFreeParking && <span>Free Parking<br /></span>}
    {singlePark.features.hasAgilityEquipment && <span>Agility Equipment<br /></span>}
    {singlePark.features.isFullyEnclosed && <span>Is Fully Enclosed<br /></span>}
    {singlePark.features.hasDisabledAccess && <span>Disabled Access<br /></span>}
    <br />

            {singlePark.address.firstLine &&
              singlePark.address.firstLine + ", "}
            {singlePark.address.secondLine &&
              singlePark.address.secondLine + ", "}
            {singlePark.address.postCode && singlePark.address.postCode + ", "}
            {singlePark.address.city && singlePark.address.city}
            <br />
            <br />
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{`Monday:`}</span>
              <span>{singlePark.opening_hours.monday}</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{`Tuesday:`}</span>
              <span>{singlePark.opening_hours.tuesday}</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{`Wednesday:`}</span>
              <span>{singlePark.opening_hours.wednesday}</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{`Thursday:`}</span>
              <span>{singlePark.opening_hours.thursday}</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{`Friday:`}</span>
              <span>{singlePark.opening_hours.friday}</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{`Saturday:`}</span>
              <span>{singlePark.opening_hours.saturday}</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{`Sunday:`}</span>
              <span>{singlePark.opening_hours.sunday}</span>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingRight: "40px",
              }}
            >
              <span>
                <a href={singlePark.website_url}>Visit Website</a>
              </span>
              <span>
                <a href={`tel:${singlePark.phone_number}`}>
                  {singlePark.phone_number}
                </a>
              </span>
            </li>
          </Typography>
          <ParkReviews reviews={reviews} isLoading={isLoading} />
        </Box>
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
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
}
