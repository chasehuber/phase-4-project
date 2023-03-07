import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";


function NavBar () {
    const navigate = useNavigate();

    return (
        <nav className="navBar">
            <NavLink
                className="navLink"
                to="/home"
                >Home
            </NavLink>
            <NavLink
                className="navLink"
                to="/recipes"
                >Threads
            </NavLink>
            <NavLink
                className="navLink"
                to="/newrecipe"
                >New Thread
            </NavLink>
            <NavLink
                className="navLink"
                to="/mykisses"
                >Profile
            </NavLink>
            <button>Logout</button>
        </nav>
    )
}

export default NavBar;