import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import SearchBar from "./SearchBar";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
    const mapRef = useRef(null);
    const latitude = 43.044291;
    const longitude = -87.907493;

    return (
        <div style={{ position: "relative", height: "100vh" }}>
            {/* Search bar */}
            <SearchBar />

            {/* Map */}
            <MapContainer
                className="Map"
                center={[latitude, longitude]}
                zoom={17}
                ref={mapRef}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
};

export default SimpleMap;
