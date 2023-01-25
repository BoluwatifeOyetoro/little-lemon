import React from "react";
import About1 from "../images/restaurant.jpg"
import About2 from "../images/Mario and Adrian A.jpg"

function About() {
    return (
        <div className="details">
            <h1 className="little">Little Lemon</h1>
            <h2 className="chic">Chicago</h2>
            <p className="desc">Little Lemon is a charming neighbourhood bistro
             that serves simple food and classic cooktails in a lively but casual
             environment. The restaurant features a locally sourced menu with daily
             specials. A family owned Mediterranean restaurant,
             focused on traditional recipes served with a modern twist.
            </p>
            <img src={About1} alt="About1" style={{height: "100px"}}/>
            <img src={About2} alt="About1" style={{height: "100px"}}/>
        </div>
    )
}

export default About;