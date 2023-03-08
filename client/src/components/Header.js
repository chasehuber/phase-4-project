import React from "react";
import { Menu } from "semantic-ui-react"
import {Link} from 'react-router-dom'

import toplogo from "./puphub.png"

function Header() {

    return (
        <div>
        <img className="logo" alt="PupHub" src={toplogo} />
        <Menu ui secondary pointing>
            <Menu.Item as={Link} to ="/home">Home</Menu.Item>
            <Menu.Item as={Link} to ="/posts">Browse Posts</Menu.Item>
            <Menu.Item as={Link} to ="/newpost">New Post</Menu.Item>
            <Menu.Item as={Link} to ="/profile">Profile</Menu.Item>
            <Menu.Item position="right">Logout</Menu.Item>
        </Menu>

        </div>
    )
}

export default Header;