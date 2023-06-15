import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { LatLngTuple, LatLngExpression } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"

interface MapProps {
  center: LatLngExpression;
  markers: {
    position: LatLngTuple;
    content: string;
  }[];
}

export default function Map({ center, markers }: MapProps) {
  const icon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [20, 30],
  });

  return (
    <>
      <MapContainer
        key="map"
        className="map"
        center={center}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          key="TileLayer"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={icon}>
            <Popup>{marker.content}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
