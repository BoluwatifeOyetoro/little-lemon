import React from "react";
import Salad from "../images/greek salad.jpg"
import Bruchetta from "../images/bruchetta.svg"
import Dessert from "../images/lemon dessert.jpg"

function Highlights() {
    return (
        <div>
            <h1 className="spec">This weeks specials!</h1>
            <button>Online Menu</button>
            <div className="highlight">
            <div className="menu">
                <img src={Salad} alt="salad" style={{height: "150px", width: "200px"}}/>
                <h3>Greek Salad</h3>
                <p>The famous greek salad of crispy lettuce, peppers, olive and
                    our Chicago style feta cheese, garnished with crunchy garlic
                    and rosemary croutons.
                </p>
                <h3>Order a delivery</h3>
            </div>

            <div className="menu">
                <img src={Bruchetta} alt="bruchetta" style={{height: "150px", width: "200px"}}/>
                <h3>Bruchetta</h3>
                <p>Our Bruchetta is made from grilled bread that has been
                    smeared with garlic and seasoned with salt and olive oil.
                </p>
                <h3>Order a delivery</h3>
            </div>

            <div className="menu">
                <img src={Dessert} alt="dessert" style={{height: "150px", width: "200px"}}/>
                <h3>Lemon Dessert</h3>
                <p>This comes straight from grandma'a recipe book, every last ingredient 
                    has been source and is as authentic as can imagined.
                </p>
                <h3>Order a delivery</h3>
            </div>
        </div>
        </div>

    )
}

export default Highlights;