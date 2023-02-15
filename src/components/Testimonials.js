import React from "react";
import Testimony from "../images/Mario and Adrian b.jpg"
import Testimony1 from "../images/testimony.jpg"
import Testimony2 from "../images/restaurant chef B.jpg"
import Testimony3 from "../images/testimony1.jpg"

function Testimonials() {
    return (
        <div className="highlight">
            <div>
                <h4>Rating</h4>
                <img src={Testimony} alt="tes" style={{height: "150px"}}/>
                <h4>Testimony</h4>
            </div>

            <div>
                <h4>Rating</h4>
                <img src={Testimony1} alt="tes" style={{height: "150px"}}/>
                <h4>Testimony</h4>
            </div>

            <div>
                <h4>Rating</h4>
                <img src={Testimony2} alt="tes" style={{height: "150px"}}/>
                <h4>Testimony</h4>
            </div>

            <div>
                <h4>Rating</h4>
                <img src={Testimony3} alt="tes" style={{height: "150px"}} />
                <h4>Testimony</h4>
            </div>
        </div>
    )
}

export default Testimonials;