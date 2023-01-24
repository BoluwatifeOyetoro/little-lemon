import React from "react";
import Logo from "../images/Logo.svg"

function NavBar() {
    return (
        <nav>
            <img src={Logo} alt="Logo" />
            <ul style={{listStyle: "none"}}>
                <li><a href="home.com">Home</a></li>
                <li><a href="home.com">About</a></li>
                <li><a href="home.com">Menu</a></li>
                <li><a href="home.com">Reservations</a></li>
                <li><a href="home.com">Order Online</a></li>
                <li><a href="home.com">Login</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;