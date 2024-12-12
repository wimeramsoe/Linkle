import React, { useEffect, useState } from "react";
import { fetchPins } from "../api/api";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const [bathrooms, setBathrooms] = useState([]);
    const [filteredBathrooms, setFilteredBathrooms] = useState([]);
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        const input = e.target.value;
        setSearchText(input);

        // Filter bathrooms based on input
        const filtered = bathrooms.filter((bathroom) =>
            bathroom.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredBathrooms(filtered);
    };

    const handleOptionClick = (pinId) => {
        // Navigate to the bathroom page using the pinId
        navigate(`/bathroom/${pinId}`);
    };

    // Fetch all bathroom data
    useEffect(() => {
        const fetchAndSetPins = async () => {
            try {
                const response = await fetchPins(); // Fetch data from the API

                // Convert the object response to an array
                const pinsArray = Object.values(response); // Object to array of bathroom data
                setBathrooms(pinsArray);
            } catch (error) {
                console.error("Error fetching pins:", error);
            }
        };

        fetchAndSetPins();
    }, []);

    return (
        <div
            style={{
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1000,
                width: "75%",
                maxWidth: "400px",
            }}
        >
            <form
                onSubmit={(e) => e.preventDefault()}
                style={{ marginBottom: "10px" }}
            >
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="⌕ Search..."
                    style={{
                        width: "100%",
                        padding: "10px",
                        height: "45px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
            </form>
            {filteredBathrooms.length > 0 && (
                <ul
                    style={{
                        listStyleType: "none",
                        padding: "0",
                        margin: "0",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        maxHeight: "200px",
                        overflowY: "auto",
                        backgroundColor: "#fff",
                    }}
                >
                    {filteredBathrooms.map((bathroom) => (
                        <li
                            key={bathroom.id}
                            onClick={() => handleOptionClick(bathroom.id)}
                            style={{
                                padding: "10px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee",
                            }}
                        >
                            {bathroom.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;
