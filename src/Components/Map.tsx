import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import "./Map.css";

export default function Map() {
//   const icon = new Icon({
//     iconUrl: "./src/images/icon.png",
//     iconSize: [36, 38],
//   });
// 
// This import s an icon image that doesn't exist yet, in our use cases we can use the icons
// this way, also don't forget to style you map's height :)
//

  return (
    <>
      <MapContainer
        key="map"
        className="map"
        center={[51.509865, -0.118092]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          key="TileLayer"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}
