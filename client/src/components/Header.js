import React from "react";
import { Menu } from "semantic-ui-react"
import {Link, useHistory} from 'react-router-dom'

import toplogo from "./puphub.png"

function Header({ currentUser }) {
    const history = useHistory();

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
            mode:"cors",
            headers: {
              "Content-Type": "application/json"
            }
        })
        history.push('/login')
        window.location.reload()
    }

    const login_option = <Menu.Item as={Link} to ="/login" className="basic-button">Login</Menu.Item>
    const profile_option = <Menu.Item as={Link} to ="/profile" className="basic-button">Profile</Menu.Item>
    const signup_option = <Menu.Item as={Link} to ="/signup" className="basic-button">Sign-up</Menu.Item>

    return (
        <div>
        <img className="logo" alt="PupHub" src={toplogo} />
        <Menu ui secondary pointing>
            <Menu.Item as={Link} to ="/posts" className="basic-button">Browse Posts</Menu.Item>
            <Menu.Item as={Link} to ="/newpost" className="basic-button">New Post</Menu.Item>
            {currentUser ?  profile_option : login_option}
            {currentUser ? null : signup_option}
            <Menu.Item as={Link} onClick={handleLogout} position="right" className="basic-button">Logout</Menu.Item>
        </Menu>

        </div>
    )
}

export default Header;