import React, {useState} from "react";

function SearchBar() {
    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Search query:", searchText);
        // Handle search logic here (if needed)
    };

    return (
        <form
            onSubmit={handleSearchSubmit}
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
            <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder="⌕Search..."
                style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                }}
            />
        </form>
    );
}

export default SearchBar;