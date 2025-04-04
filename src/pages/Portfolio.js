import React from "react";
// import grill from "../images/grilllikeapro.png";
// import cinema from "../images/starlitcinema.png";
import progress from "../images/1.png";
import fitness from "../images/2.png";
import electric from "../images/3.png";
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
            {/* <h1>Copywriting</h1> */}
            <div className="global-container">
                <br />
                <p>Below are some projects for a large retail tech client.
                    <br />
                    Due to an NDA, these have been redesigned.
                </p>
            </div>
            <div className="row">
                {/* <div className="column">
                    <img className="img1" src={grill} alt="copy" />
                    <img className="img2" src={cinema} alt="copy" />
                </div> */}
                <div className="fitness">
                    <img className="img10" src={progress} alt="copy" />
                    <img className="img10" src={fitness} alt="copy" />
                    <img className="img10" src={electric} alt="copy" />
                    <div className="middle">
                        <div className='text'>Motivates the reader to embrace personal growth,
                            boost their fitness, and consider new options.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;