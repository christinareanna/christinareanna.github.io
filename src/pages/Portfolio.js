import React from "react";
import progress from "../images/1.png";
import fitness from "../images/2.png";
import electric from "../images/3.png";
import "./Portfolio.css";
import Carousels from "./Carousels.js";

function Portfolio() {

    return (
        <div className="project-container">
            <div className="global-container">
                <h2>My Recent Projects</h2>
                <p>Below are some projects for a large retail tech client.
                    <br />
                    Due to an NDA, these have been redesigned.</p>
            </div>

            <div className="row">
                <div className="fitness">
                    <img className="img10" src={progress} alt="copy" />
                    <img className="img10" src={fitness} alt="copy" />
                    <img className="img10" src={electric} alt="copy" />
                    <div className="overlay">
                        <p>
                            Motivates the reader to embrace personal growth, boost their fitness, and consider new options.
                        </p>
                    </div>
                </div>
            </div>

            <div className="global-container">
                <h2>The Spoonie Club Instagram Posts</h2>
                <p>These are a few posts I created for my new Instagram group called The_Spoonie_Club.</p>
                <br/>
                <p>PS: A "spoonie" is someone with a chronic illness who has limited energy for daily activities.</p>
            </div>
            <Carousels />
        </div>
    );
}

export default Portfolio;
