// import React, { useEffect, useRef } from "react";
// import Breadcrumbs from "./Breadcrumbs";
// import TableList from "./TableList";
// import { useToggle } from './ToggleContext';
// import { MapContainer, TileLayer, Marker, useMap, Tooltip, FeatureGroup } from 'react-leaflet'
// import "leaflet/dist/leaflet.css";
// import { getStationsStatus,GetStations } from "../ApiServices";
// export default function Dashboard(props) {
//   const user = useToggle();
//   useEffect(()=>{
//     GetStations().then(response=>{
//       console.log('response',response)
//     })
//   },[])
//   return (
//     <>
//       <Breadcrumbs title="Dashboards" breadcrumbItem="Dashboards" />
//       {!user.toggleValue ?<Map/>:<TableList />}
//     </>
//   );
// }

// function Map(props){
//   let mapRef = useRef();
//   let groupRef = useRef();
//   var middle = { lat: 1.292961, lon: 103.7116383}
//   return(
//     <MapContainer whenCreated={(mapInstance) => { mapRef.current = mapInstance; }} fullscreenControl={true} center={[middle?.lat, middle?.lon]} zoom={14} style={{ height: '70vh', width: '100wh' }}>
//       <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//     </MapContainer>
//   )
// }

import React, { useEffect, useState, lazy, Suspense } from 'react'
import { GetStations } from '../ApiServices';
const MapView = lazy(() => import('./MapView'));
const renderLoader = () => <p>Loading</p>;

export default function Home(props) {
  const [stations, setStations] = useState([]);
  //const { token } = useContext(ToggleContext);
  useEffect(() => {
    getAllStations();
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  const getAllStations = async () => {
    const token = ''//await getToken()
    console.log('start map', new Date().getTime())
    GetStations(token)
      .then(res => res.json())
      .then(
        (result) => {
          setStations(result)
          console.log('end map', new Date().getTime())
        }
      )
  }
  console.log(stations)

  // var filtered = stations.filter(p => String(p.pubid.toLowerCase()).startsWith(stationSearch));

  return (
    <Suspense fallback={renderLoader()}>
      <MapView stations={stations} />
    </Suspense>
  )
}