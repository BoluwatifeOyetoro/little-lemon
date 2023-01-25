import React from "react";
import Food from "../images/restauranfood.jpg"
function HeroSection() {
    return (
        <div className="hero">
            <h1 className="little">Little Lemon</h1>
            <h2 className="chic">Chicago</h2>
            <p className="desc">We are a family owned Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.
            </p>
            <button>Reserve a Table</button>
            <img src={Food} alt="Food" style={{height: "150px"}} />
        </div>
    )
}

export default HeroSection;