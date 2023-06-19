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
import { orderObj } from "../types/CustomTypes";
import Button from "@mui/material/Button";

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

function Filters({ setQueries }: any) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [checkboxes, setCheckboxes] = React.useState({
    isFree: false,
    isWellLit: false,
    isFreeParking: false,
    isParking: false,
    hasAgilityEquipment: false,
    isFullyEnclosed: false,
    hasDisabledAccess: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxes({
      ...checkboxes,
      [event.target.name]: event.target.checked,
    });
  };

  const [orderParam, setOrderParam] = React.useState("");
  const handleOrderParamChange = (event: SelectChangeEvent) => {
    setOrderParam(event.target.value);
  };

  const [order, setOrder] = React.useState("");
  const handleOrderChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value);
  };

  const handleReset = () => {
    setOrderParam("");
    setOrder("");
    setCheckboxes({
      isFree: false,
      isWellLit: false,
      isFreeParking: false,
      isParking: false,
      hasAgilityEquipment: false,
      isFullyEnclosed: false,
      hasDisabledAccess: false,
    });
  };

  const orderObj: orderObj = {
    order: order,
    orderParam: orderParam,
  };

  let queryString = "";

  for (const checkbox in checkboxes) {
    if (checkboxes[checkbox as keyof object] === true) {
      queryString += `${queryString.length === 0 ? "?" : "&"}${checkbox}=true`;
    }
  }

  if (orderObj.orderParam !== "") {
    queryString += `${queryString.length === 0 ? "?" : "&"}orderBy=${
      orderObj.orderParam
    }`;
  }

  if (orderObj.order !== "") {
    queryString += `:${orderObj.order}`;
  }
  React.useEffect(() => {
    setQueries(queryString);
  }, [queryString]);
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <div>
        <CardActions disableSpacing>
          <CardHeader title="Filters" />
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show Filters"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.isFree}
                  onChange={handleCheckboxChange}
                  name="isFree"
                />
              }
              label="Free Entry"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.isWellLit}
                  onChange={handleCheckboxChange}
                  name="isWellLit"
                />
              }
              label="Well Lit"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.isFreeParking}
                  onChange={handleCheckboxChange}
                  name="isFreeParking"
                />
              }
              label="Free Parking"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.isParking}
                  onChange={handleCheckboxChange}
                  name="isParking"
                />
              }
              label="Parking Available"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.hasAgilityEquipment}
                  onChange={handleCheckboxChange}
                  name="hasAgilityEquipment"
                />
              }
              label="Agility Equipment"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.isFullyEnclosed}
                  onChange={handleCheckboxChange}
                  name="isFullyEnclosed"
                />
              }
              label="Fully Enclosed"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.hasDisabledAccess}
                  onChange={handleCheckboxChange}
                  name="hasDisabledAccess"
                />
              }
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
              {orderParam !== "" ? (
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
              ) : null}
            </div>
          </FormGroup>
          <Button variant="contained" onClick={handleReset}>
            Reset Filters
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Filters;
