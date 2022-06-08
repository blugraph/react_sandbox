import React, { useRef } from "react";
import Breadcrumbs from "./Breadcrumbs";
import TableList from "./TableList";
import { useToggle } from './ToggleContext';
import { MapContainer, TileLayer, Marker, useMap, Tooltip, FeatureGroup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
export default function MapsContainer(props) {
  const user = useToggle();
  return (
    <>
      <Breadcrumbs title="Maps" breadcrumbItem="Maps" />
      {!user.toggleValue ?<Map/>:<TableList />}
    </>
  );
}

function Map(props){
  let mapRef = useRef();
  let groupRef = useRef();
  var middle = { lat: 1.292961, lon: 103.7116383}
  return(
    <MapContainer whenCreated={(mapInstance) => { mapRef.current = mapInstance; }} fullscreenControl={true} center={[middle?.lat, middle?.lon]} zoom={14} style={{ height: '70vh', width: '100wh' }}>
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  )
}