import React from "react";
import grill from "../images/grilllikeapro.png";
import cinema from "../images/starlitcinema.png";
import electric from "../images/electric.png";
import holiday from "../images/holidayready.png";
import cleaning from "../images/cleaning.png";
import fitness from "../images/fitness.png";
import progress from "../images/progress.png";
import habits from "../images/habits.png";
import glow from "../images/glow.png";
// import copy7 from "../images/copy7.jpg";
// import ssg2 from "../images/copy8.jpg";
// import copy9 from "../images/copy9.jpg";
// import copy6 from "../images/copy6.jpg";
// import "../App.css";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import "../darkMode.css";
import "./Portfolio.css";

function Portfolio(isOpen, toggle) {

    return (
        <div className="project-container">
            {/* <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div> */}
            <h1>Copywriting.</h1>
            <div className="global-container">
                <p>Below are a few examples of email copy I created to increase engagement
                    and acquisition rates for a large tech client in the retail industry.
                    For confidentiality purposes, these samples have been redesigned, but
                    they still demonstrate my approach to crafting copy that drives
                    action—whether it's increasing opens, boosting click-through rates,
                    or encouraging product purchases—all while maintaining brand tone and voice.
                </p>
            </div>
            <div className="row">
                <div className="column">
                    <img className="img1" src={grill} alt="copy" />
                    <img className="img2" src={cinema} alt="copy" />
                    <img className="img5" src={holiday} alt="copy" />
                    <img className="img10" src={cleaning} alt="copy" />
                    <img className="img3" src={electric} alt="copy" />
                </div>
                <div className="column">
                    <img className="img10" src={progress} alt="copy" />
                    <img className="img10" src={fitness} alt="copy" />
                    <img className="img10" src={habits} alt="copy" />
                    <img className="img10" src={glow} alt="copy" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;