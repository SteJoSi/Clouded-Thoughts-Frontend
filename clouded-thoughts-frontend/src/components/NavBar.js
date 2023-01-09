import React from 'react';
import { Link } from 'react-router-dom';

const navStyles = {
    display: "inline-block",
    width: "75px",
    padding: "12px 20px",
    margin: "0px 10px 0px 10px",
    textDecoration: "none",
    color: "black",
}

function NavBar() {
    return (
        <div>
            <nav>
                <Link exact to="/" style={navStyles}>Home</Link>
                <Link exact to="/profile" style={navStyles}>Profile</Link>
                <Link exact to="/newEntry" style={navStyles}>New Entry</Link>
                <Link exact to="/logout" style={navStyles}>Sign Out</Link>
            </nav>
        </div>
    )
}

export default NavBar;

