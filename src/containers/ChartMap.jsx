import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { Icon } from "leaflet";
import "../styles/components/ChartMap.css";

function LocationMarker() {
  const [position, setPosition] = React.useState(null);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null;
}

const ChartMap = ({ latitude = 0.036631, longitude = -102.322872 }) => {
  // const position = [18.036631, -102.322872];
  const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup icon={Icon}>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <LocationMarker latitude={latitude} longitude={longitude} />
    </MapContainer>
  );
};
export { ChartMap };
