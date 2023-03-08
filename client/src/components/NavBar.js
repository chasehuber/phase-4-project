import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar () {
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     setLoggedIn(false);
    //     navigate("/")
    // }

    return (
        <nav className="navBar">
            <NavLink
                className="navLink"
                to="/home"
                >Home
            </NavLink>
            <NavLink
                className="navLink"
                to="/posts"
                >Posts
            </NavLink>
            <NavLink
                className="navLink"
                to="/newpost"
                >New Post
            </NavLink>
            <NavLink
                className="navLink"
                to="/profile"
                >My Profile
            </NavLink>
            <button>Logout</button>
        </nav>
    )
}

export default NavBar;