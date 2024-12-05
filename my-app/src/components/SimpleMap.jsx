import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import SearchBar from "./SearchBar";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import leaflet
import { fetchPins } from "../api/api.js";
import image from "../images/img.png";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const SimpleMap = () => {
    const mapRef = useRef(null);
    const latitude = 43.044291;
    const longitude = -87.907493;

    // State to hold pins
    const [pins, setPins] = useState([]);

    const customMarker = new L.Icon({
        iconUrl: image,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    // Fetch pins when the component loads
    useEffect(() => {
        const fetchAndSetPins = async () => {
            try {
                const response = await fetchPins(); // Fetch data from the API

                // Convert the object response to an array
                const pinsArray = Object.values(response); // Convert object to array
                setPins(pinsArray); // Update state with the pin data
            } catch (error) {
                console.error("Error fetching pins:", error);
            }
        };

        fetchAndSetPins();
    }, []);

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

                {/* Add markers */}
                {pins.length > 0 ? (
                    pins.map((pin) => (
                        <Marker
                            key={pin.id} // Unique key for each marker
                            position={[pin.lat, pin.long]} // Latitude and longitude
                            icon={customMarker}
                        >
                            <Popup>
                                <b>{pin.name}</b>
                                <br />
                                <Link to={`/bathroom/${pin.id}`}>
                                    <Button
                                        variant="danger"
                                        style={{
                                            width: "150px", // Set the width of the button
                                            height: "30px", // Set the height of the button
                                            fontSize: "12px",
                                        }}
                                    >View Details</Button>
                                </Link>
                            </Popup>
                        </Marker>
                    ))
                ) : (
                    <div>Loading pins...</div> // Show a loading message while fetching data
                )}
            </MapContainer>
        </div>
    );
};

export default SimpleMap;
