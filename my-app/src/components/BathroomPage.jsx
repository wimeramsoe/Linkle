import SearchBar from "./SearchBar";
import { useParams } from "react-router-dom";
import { fetchBathroomDetails } from "../api/api.js";
import React, { useEffect, useState } from "react";
import {Button, Col, Image, Row} from "react-bootstrap";


function BathroomPage() {
    const { pinId } = useParams(); // Get the id parameter from the URL
    const [ada_access, setAda_access] = useState(false);
    const [address, setAddress] = useState("");
    const [bottle_filler, setBottle_filler] = useState(false);
    const [diaper_change, setDiaper_change] = useState(false);
    const [gender, setGender] = useState("");
    const [id_access, setId_access] = useState(false);
    const [name, setName] = useState("");
    const [needs_pay, setNeeds_pay] = useState(false);
    const [num_stalls, setNum_stalls] = useState(0);
    const [num_urinals, setNum_urinals] = useState(0);
    const [rating, setRating] = useState(0);
    const [water_fountain, setWater_fountain] = useState(false);

    // Fetch bathroom info
    useEffect(() => {
        const fetchBathroom = async () => {
            try {
                console.log("Fetching bathroom details for ID:", pinId);
                const response = await fetchBathroomDetails(pinId); // Fetch data from the API
                setAda_access(response.ada_access);
                setAddress(response.address);
                setBottle_filler(response.bottle_filler);
                setDiaper_change(response.diaper_change);
                setGender(response.gender);
                setId_access(response.id_access);
                setName(response.name);
                setNeeds_pay(response.needs_payment);
                setNum_stalls(response.numb_stalls);
                setNum_urinals(response.numb_urinals);
                setRating(response.rating);
                setWater_fountain(response.water_fountain);
            } catch (error) {
                console.error("Error fetching bathroom details:", error);
            }
        };

        fetchBathroom();
    }, [pinId]);



    return (
        <div>
            <SearchBar/>
            <br/>
            <br/>
            <br/>
            <h1>{name}</h1>
            <Row>
                <Col>
                    <Image src="https://via.placeholder.com/150" rounded alt="Image of buidling"/>
                </Col>
                <Col>
                    <p>Rating: {rating}</p>
                    <p>{address}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul>
                        <li>Gender: {gender}</li>
                        <li>Stalls: {num_stalls}</li>
                        {num_urinals > 0 && <li>Urinals: {num_urinals}</li>}
                        {water_fountain && <li>Water Fountain</li>}
                        {bottle_filler && <li>Bottle Filler</li>}
                    </ul>
                </Col>
                <Col>
                    <ul>
                        {ada_access && <li>ADA Accessible</li>}
                        {id_access && <li>ID Required</li>}
                        {needs_pay && <li>Payment Required</li>}
                        {diaper_change && <li>Diaper Changing Station</li>}
                    </ul>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <Row>
                <Col>
                    <h2>Reviews</h2>
                </Col>
                <Col>
                    <Button variant="secondary">Leave Review</Button>
                </Col>
            </Row>

        </div>
    );
}

export default BathroomPage;