import React from "react";
import Logo from "../images/Logo.svg"

function NavBar() {
    return (
        <nav>
            <img src={Logo} alt="Logo" className="logo"/>
            <ul>
                <li className="nav-li"><a href="home.com">Home</a></li>
                <li className="nav-li"><a href="home.com">About</a></li>
                <li className="nav-li"><a href="home.com">Menu</a></li>
                <li className="nav-li"><a href="home.com">Reservations</a></li>
                <li className="nav-li"><a href="home.com">Order Online</a></li>
                <li className="nav-li"><a href="home.com">Login</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;