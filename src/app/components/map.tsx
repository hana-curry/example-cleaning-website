"use client"
import React, { useRef } from "react";
import { MapContainer, TileLayer, LayerGroup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({className}: {className: string}) {
    const mapRef = useRef(null)
    const latitude = -65.83828
    const longitude = 53.68229

    return ( 
        // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer className={className} center={[latitude, longitude]} zoom={100} ref={mapRef} >
            <TileLayer
            attribution='<a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup>
                <Circle center={[latitude, longitude]} pathOptions={{ fillColor: 'blue' }} radius={5} />
                <Circle
                    center={[latitude, longitude]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={2.5}
                    stroke={false}
                />
            </LayerGroup>
        </MapContainer>
    )
}