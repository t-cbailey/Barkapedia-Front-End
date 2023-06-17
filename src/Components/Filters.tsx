import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { FiltersObj } from "../types/CustomTypes";

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

function Filters() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [order, setOrder] = React.useState("");
  const handleOrderChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value);
  };

  const [orderParam, setOrderParam] = React.useState("");
  const handleOrderParamChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setOrderParam(event.target.value);
  };

  const filtersObj: FiltersObj = {
    isFree: false,
    isWellLit: false,
    isFreeParking: false,
    IsParking: false,
    hasAgilityEquipment: false,
    isFullyEnclosed: false,
    hasDisabledAccess: false,
    order: "",
    orderParam: "",
  };

  console.log(filtersObj);

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardHeader title="Filters" />
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
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="No Entry Fee" />
            <FormControlLabel control={<Checkbox />} label="Well Lit" />
            <FormControlLabel control={<Checkbox />} label="Free Parking" />
            <FormControlLabel
              control={<Checkbox />}
              label="Parking Available"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Agility Equipment"
            />
            <FormControlLabel control={<Checkbox />} label="Fully Enclosed" />
            <FormControlLabel
              control={<Checkbox />}
              label="	Mobility Accessible"
            />

            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Sort By
                </InputLabel>
                <Select
                  labelId="sortByParam"
                  id="sortByParam"
                  value={orderParam}
                  label="Sort By"
                  onChange={handleOrderParamChange}
                >
                  <MenuItem value={""}>All Parks</MenuItem>
                  <MenuItem value={"name"}>Park Name</MenuItem>
                  <MenuItem value={"current_average_rating"}>
                    Average Rating
                  </MenuItem>
                  <MenuItem value={"size"}>Park Size</MenuItem>
                  <MenuItem value={"current_review_count"}>
                    Number of Reviews
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Order
                </InputLabel>
                <Select
                  labelId="sortBy"
                  id="sortBy"
                  value={order}
                  label="Order"
                  onChange={handleOrderChange}
                >
                  <MenuItem value={"asc"}>Ascending</MenuItem>
                  <MenuItem value={"desc"}>Descending</MenuItem>
                </Select>
              </FormControl>
            </div>
          </FormGroup>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Filters;
