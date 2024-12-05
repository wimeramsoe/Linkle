import SimpleMap from "./SimpleMap";
import BathroomPage from "./BathroomPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Routes


function AppNav() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SimpleMap />} /> {/* Home page route */}
                <Route path="/bathroom/:pinId" element={<BathroomPage />} /> {/* Bathroom page route */}
            </Routes>
        </Router>
    );
}

export default AppNav;