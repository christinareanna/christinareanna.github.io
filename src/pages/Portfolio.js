import React from "react";
import grill from "../images/grilllikeapro.png";
import cinema from "../images/starlitcinema.png";
import electric from "../images/electric.png";
import tcl from "../images/tcl.png";
import holiday from "../images/holidayready.png";
import cleaning from "../images/cleaning.png";
import fitness from "../images/fitness.png";
import progress from "../images/progress.png";
import habits from "../images/habits.png";
import glow from "../images/glow.png";
import copy7 from "../images/copy7.jpg";
import ssg2 from "../images/copy8.jpg";
import copy9 from "../images/copy9.jpg";
import copy6 from "../images/copy6.jpg";
import "../App.css";
// import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../darkMode.css";
import "./Portfolio.css";

function Portfolio(isOpen, toggle) {

    return (
        <div className="parent">
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <div>
                <p>Welcome to my portfolio!
                    <br></br>
                    Here you'll find CRM emails I've written for a large retail tech client.
                    <br></br>
                    I redesigned some of the original visuals in Canva.
                </p>
            </div>
            <div className="row">
                <div className="column">
                    <h2>Outdoor Living</h2>
                    <img className="img1" src={grill} alt="copy" />
                    <img className="img2" src={cinema} alt="copy" />
                    <h2>Eco-friendly Tech</h2>
                    <img className="img3" src={electric} alt="copy" />
                    <h2>Gaming with TCL TVs</h2>
                    <img className="img4" src={tcl} alt="copy" />
                </div>
                <div className="column">
                    <h2>Holiday-ready Home</h2>
                    <img className="img5" src={holiday} alt="copy" />
                    <img className="img10" src={cleaning} alt="copy" />
                    <h2>Amazon Tech</h2>
                    <img className="img7" src={copy7} alt="copy" />
                    <img className="img6" src={copy6} alt="copy" />
                </div>
                <div className="column">
                    <h2>Wellness</h2>
                    <img className="img10" src={fitness} alt="copy" />
                    <img className="img10" src={progress} alt="copy" />
                    <img className="img10" src={habits} alt="copy" />
                    <img className="img10" src={glow} alt="copy" />
                </div>
                <div className="column">
                    <h2>Samsung Appliances</h2>
                    <img className="img8" src={ssg2} alt="copy" />
                    <h2>Clicks</h2>
                    <img className="img9" src={copy9} alt="copy" />
                </div>
            </div>
        </div >
    )
}

export default Portfolio;