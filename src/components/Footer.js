import React from "react";
//import Lemon from "../images/Logo.svg"


function Footer() {
    return (
        <footer className="highlight">
            {/* <img src={Lemon} alt="Logo" /> */}
            <ul>
            <h4>Doormat Navigation</h4>
                <li><a href="home.com">Home</a></li>
                <li><a href="home.com">About</a></li>
                <li><a href="home.com">Menu</a></li>
                <li><a href="home.com">Reservations</a></li>
                <li><a href="home.com">Order Online</a></li>
                <li><a href="home.com">Login</a></li>
            </ul>

            <ul>
            <h4>Contact</h4>
                <li><a href="home.com">Address</a></li>
                <li><a href="home.com">Phone Number</a></li>
                <li><a href="home.com">Email</a></li>
            </ul>

            <ul>
            <h4>Social Media Links</h4>
                <li><a href="home.com">Address</a></li>
                <li><a href="home.com">Phone Number</a></li>
                <li><a href="home.com">Email</a></li>
            </ul>
        </footer>
    )
}

export default Footer;