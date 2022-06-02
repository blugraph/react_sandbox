import React, { useEffect, useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import greenIcon from '../assets/images/green.png';
import greyIcon from '../assets/images/grey.png';
import redIcon from '../assets/images/red.png';
import blackIcon from '../assets/images/black.png';
import orangeIcon from '../assets/images/orange.png'
import { getStationsStatus } from '../ApiServices';
function Map(props) {
    const [selected, setSelected] = useState(null)

    const Status = { status1: '0-75%', status2: '75-90%', status3: '90-100%', status4: 'maintenance' }

    const IconList = {
        icon1: greenIcon,
        icon2: greyIcon,
        icon3: redIcon,
        icon4: orangeIcon,
        icon5: blackIcon
    }
    let finaldata = []
    for (var i = 0; i < props.stations.length; i++) {
        if (props.stations[i].s3action === 'add') {
            props.stations[i]['icon'] = IconList.icon2
        }
        if (props.stations[i].wl <= 75 && props.stations[i].s3action === 'com') {
            props.stations[i]['icon'] = IconList.icon1
        }
        if (props.stations[i].wl > 75 && props.stations[i].wl <= 90 && props.stations[i].s3action === 'com') {
            props.stations[i]['icon'] = IconList.icon4
        }
        if (props.stations[i].wl > 90 && props.stations[i].wl <= 100 && props.stations[i].s3action === 'com') {
            props.stations[i]['icon'] = IconList.icon3
        }
        if (props.stations[i].md === 'maintenance' && props.stations[i].s3action === 'com') {
            props.stations[i]['icon'] = IconList.icon5
        }
        if (props.stations[i].wl <= 75) {
            props.stations[i]['stationstatus'] = Status.status1
        }
        if (props.stations[i].wl > 76 && props.stations[i].wl <= 90) {
            props.stations[i]['stationstatus'] = Status.status2
        }
        if (props.stations[i].wl > 90 && props.stations[i].wl <= 100) {
            props.stations[i]['stationstatus'] = Status.status3
        }
        if (props.stations[i].md === 'maintenance') {
            props.stations[i]['stationstatus'] = Status.status3
        }
        if (props.stations[i].ts) {
            let date_now = new Date(props.stations[i].ts);
            props.stations[i]['time'] = dateRange_sg(date_now);
        }
        finaldata = props.stations
    }

    // const onClickMarker = (data) => {
    //     history.push(`/station/${data.sid}`)
    // }

    function dateRange_sg(date_now) {
        let sg_hr = date_now.toLocaleString('en-US', { hour: '2-digit', hour12: false, timeZone: 'Asia/Singapore' });
        let min = date_now.toLocaleString('en-US', { minute: '2-digit', hour12: false, timeZone: 'Asia/Singapore' });
        let sec = date_now.toLocaleString('en-US', { second: '2-digit', hour12: false, timeZone: 'Asia/Singapore' });
        let ye = date_now.toLocaleString('en-US', { year: 'numeric', timeZone: 'Asia/Singapore' });
        let mo = date_now.toLocaleString('en-US', { month: '2-digit', timeZone: 'Asia/Singapore' });
        let da = date_now.toLocaleString('en-US', { day: '2-digit', timeZone: 'Asia/Singapore' });
        // let dt_sg = ye + '-' + mo + '-' + da + '   ' + sg_hr + ':' + min + ':' + sec;
        let dt_sg = ye + "-" + mo + "-" + da + " " + String(sg_hr).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
        return dt_sg
    }

    return (
        <GoogleMap
            defaultOptions={{ mapTypeControl: false }}
            defaultZoom={12}
            defaultCenter={{ lat: 1.352083, lng: 103.819839 }}
        >
            {finaldata && finaldata.length > 0 && finaldata.map((data, i) => (
                <Marker
                    icon={{
                        url: data.icon,
                        scaledSize: new window.google.maps.Size(15, 15),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(0, 0)
                    }}
                    key={data.sid + i}
                    position={{ lat: parseFloat(data.latitude, 10), lng: parseFloat(data.longitude, 10) }}
                    onMouseOver={() => {
                        setSelected(data);
                    }}
                    // onClick={() => { onClickMarker(data) }}
                >
                    {selected !== null && selected.sid === data.sid && <InfoWindow onCloseClick={() => setSelected(null)}>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>{selected.pubid}:  {selected.location}</div>
                            <div>Date&Time:  {selected.time}</div>
                            <div>Station Status:  {selected.stationstatus}</div>
                            <div>Water Level:  {parseInt(selected.wl)}m  ({Math.floor(selected.mrl * 1000) / 1000}mRL)</div>
                            <div>Cope Level:  {selected.cope_level}mRL</div>
                            <div>Invert Level:  {selected.invert_level}mRL</div>
                        </div>
                    </InfoWindow>}
                </Marker>
            ))}
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function MapView(props) {
    const height = 850//useWindowDimensions();
    const HeaderHeight = 58
    const FooterHeight = 64
    const z = height - HeaderHeight - FooterHeight - 50
    const [stationStatus, setStationStatus] = useState({})
    const fetchStations = async () => {
        const token = ''//await getToken()
        getStationsStatus(token)
            .then(res => res.json())
            .then(
                (result) => {
                    setStationStatus(result)
                }
            )
    }
    useEffect(() => { fetchStations() }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div style={{ height: '50px', padding: '5px 0' }}>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className='col-md-8'>
                        <span className="green smlbox"></span>0-75% ({stationStatus['0-75']}) <span className="percentage50"></span>|
                        <span className="yellow smlbox"></span>75-90% ({stationStatus['75-90']}) <span className="percentage75"></span>|
                        <span className="red smlbox"></span>90-100% ({stationStatus['90-100']})  <span className="percentage90"></span>|
                        <span className="black smlbox"></span>Maintenance ({stationStatus['maintenance']}) <span className="maintenance"></span>
                    </div>
                </div>
            </div>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBWl1Wa8-EazP-NIQOPi_XiQsvt_JnmahY`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: z }} />}
                mapElement={<div style={{ height: `100%` }} />}
                {...props}
            />
        </div>
    )
}