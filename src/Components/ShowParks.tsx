import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ParksList from "./ParksList";
import Map from "./Map";
import { Park, TabPanelProps } from "../types/CustomTypes";
import { LatLngTuple } from "leaflet";
import ParksListCard from "./ParksListCard";
import Filters from "./Filters";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface ShowParks {
  setQueries: Function;
  parks: Park[];
  mapMarkers: any;
  isLoading: boolean;
  city: string;
}

export default function ShowParks({
  setQueries,
  parks,
  mapMarkers,
  isLoading,
  city,
}: ShowParks) {
  const [value, setValue] = React.useState(0);
  const [selectedParkId, setSelectedParkId] = React.useState<string | null>(
    null
  );
  const [park, setPark] = React.useState<Park | null>(null);

  const center: LatLngTuple = [51.507268, -0.166791];

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleMarkerClick = (parkId: string) => {
    setSelectedParkId(parkId);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Filters setQueries={setQueries} city={city} />
      <h3>{`${parks.length} ${parks.length > 1 ? "results" : "result"} ${
        city === "" ? "" : "in" + " " + city.match(/(?<==).+/)
      }`}</h3>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="View by Map" {...a11yProps(0)} />
          <Tab label="View List" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Map
          center={center}
          markers={mapMarkers}
          onMarkerClick={handleMarkerClick}
          selectedParkId={selectedParkId}
          parks={parks}
          isListView={true}
        />

        {park && <ParksListCard park={park} fullWidth={false} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ParksList parks={parks} isLoading={isLoading} />
      </TabPanel>
    </Box>
  );
}
