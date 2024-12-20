import React from "react";
import copy1 from "../images/copy1.jpg";
import copy2 from "../images/copy2.jpg";
// import copy3 from "../images/copy3.jpg";
import copy4 from "../images/copy4.jpg";
import copy5 from "../images/copy5.jpg";
import copy6 from "../images/copy6.jpg";
import copy7 from "../images/copy7.jpg";
import copy8 from "../images/copy8.jpg";
import copy9 from "../images/copy9.jpg";
import copy10 from "../images/copy10.jpg";
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
            <div id="desc">
                Welcome to my copywriting portfolio.
                <br>
                </br>
            </div>
            <div className="row">
                <div className="column">
                    {/* <h2>Outdoor Living</h2> */}
                    <img className="img1" src={copy1} alt="copy" />
                    {/* <h2>Eco-friendly Tech</h2> */}
                    <img className="img2" src={copy2} alt="copy" />
                    <img className="img4" src={copy4} alt="copy" />
                </div>
                <div className="column">
                    {/* <h2>Gaming with TCL TVs</h2> */}
                    {/* <h2>Holiday-ready Home</h2> */}
                    <img className="img5" src={copy5} alt="copy" />
                    <img className="img6" src={copy6} alt="copy" />
                    <img className="img7" src={copy7} alt="copy" />
                </div>
                <div className="column">
                    {/* <h2>Amazon Tech</h2> */}
                    <img className="img10" src={copy10} alt="copy" />
                </div>
                <div className="column">
                    {/* <h2>Samsung Appliances</h2> */}
                    <img className="img8" src={copy8} alt="copy" />
                    <img className="img9" src={copy9} alt="copy" />

                </div>
            </div>
        </div>
    )
}

export default Portfolio;