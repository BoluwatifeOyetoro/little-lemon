import React from "react";
import GrkSal from "../images/greek salad.jpg"

function Highlights() {
    return (
        <div>
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
            <div>
                {/* <img src={GrkSal} /> */}
                <h3>Greek Salad</h3>
                <p>The famous greek salad of crispy lettuce, peppers, olive and
                    our Chicago style feta cheese, garnished with crunchy garlic
                    and rosemary croutons.
                </p>
                <h3>Order a delivery</h3>
            </div>
        </div>
    )
}

export default Highlights;