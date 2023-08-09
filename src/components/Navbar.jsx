import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navBar">
            <Link to="/">Founder</Link>
            <Link to="/charester">charester</Link>
        </div>
    );
};

export default Navbar;
