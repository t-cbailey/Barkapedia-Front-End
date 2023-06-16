import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { LatLngTuple, LatLngExpression } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Link } from "react-router-dom";
import ParksListCard from "./ParksListCard";

interface MapProps {
  center: LatLngExpression;
  markers: {
    position: LatLngTuple;
    content: string;
    parkId: string;
  }[];
  onMarkerClick: (parkId: string) => void;
  selectedParkId: string | null;
  parks: Park[];
}

export default function Map({
  center,
  markers,
  isListPage,
  onMarkerClick,
  selectedParkId,
  showCard,
  parks,
}: MapProps) {
  const icon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [20, 30],
  });

  const handleMarkerClick = (parkId: string) => {
    onMarkerClick(parkId);
  };

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
          <Marker
            key={index}
            position={marker.position}
            icon={icon}
            eventHandlers={{
              click: () => handleMarkerClick(marker.parkId),
            }}
          >
            <Popup>
              {isListPage ? (
                <Link to={`/parks/${marker.parkId}`}>{marker.content}</Link>
              ) : (
                <>{marker.content}</>
              )}
              {selectedParkId !== null && selectedParkId === marker.parkId && (
                <ParksListCard
                  park={
                    parks.find(
                      (park) => park.id.toString() === selectedParkId
                    ) || null
                  }
                  parks={parks}
                />
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
