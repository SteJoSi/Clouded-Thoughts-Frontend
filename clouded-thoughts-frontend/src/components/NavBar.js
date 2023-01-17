import React from 'react';
import { Link } from 'react-router-dom';

const navStyles = {
    display: "inline-block",
    width: "75px",
    padding: "12px 20px",
    margin: "0px 10px 0px 10px",
    textDecoration: "none",
    color: "black"
}

function NavBar() {
    return (
        <div>
            <nav id="navbar">
                <Link exact to="/" style={navStyles}><ion-icon name="home"></ion-icon> Home</Link>
                <Link exact to="/users" style={navStyles}><ion-icon name="person"></ion-icon>Users</Link>
                <Link exact to="/posts" style={navStyles}><ion-icon name="reader"></ion-icon>Posts</Link>
                <Link exact to="/newEntry" style={navStyles}><ion-icon name="create"></ion-icon>New Entry</Link>
                {/* <Link exact to="/logout" style={navStyles}><ion-icon name="walk"></ion-icon>Sign Out</Link> */}
            </nav>
        </div>
    )
}

export default NavBar;

