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
            {/* <NavLink exact to="/posts" style={navStyles}>Posts</NavLink> */}
            {/* <NavLink exact to="/create" style={navStyles}>Create</NavLink> */}
            {/* <NavLink exact to="/logout" style={navStyles}>Logout</NavLink> */}
        </nav>
    </div>
  )
}

export default NavBar;

