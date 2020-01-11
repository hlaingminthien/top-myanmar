import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const icon = require("../../../assets/icons/marker.png");

const AnyReactComponent = ({ text }) => <div>{text}<img src={icon} alt="" /></div>;

const TopMap = () => {
    const pro = {
        latlon: {
            lat: 21.887880,
            lng: 96.100609
        },
        zoom: 13
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{height: '50vh', overflow: 'hidden'}}>
        <div style={{ height: '125vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAcWK8WHabUh0BMDZuIIPo0qfWXWarBzoo" }}
                defaultCenter={pro.latlon}
                defaultZoom={pro.zoom}
            >
                <AnyReactComponent
                    lat={21.9426}
                    lng={96.1078}
                    text=""
                />
            </GoogleMapReact>
        </div>
        </div>
    );
}

export default TopMap