import React from "react";
import copy1 from "../images/copy1.jpg";
import copy2 from "../images/copy2.jpg";
import copy3 from "../images/copy3.jpg";
import copy4 from "../images/copy4.jpg";
import copy5 from "../images/copy5.jpg";
import "./Portfolio.css";
import "../App.css";
// import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../darkMode.css"

function Portfolio(isOpen, toggle) {

    return (
        <div className="parent">
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <div id="desc">
                    Welcome to my portfolio.
                    <br>
                    </br>
                    <br>
                    </br>
                    This is always a work in progress as I continue my writing journey.
                    <br>
                    </br>
                    <br>
                    </br>
                    These are some of my favorites.
                </div>
            <div>
                <img className="img1" src={copy1} alt="copy" width={300} height={600} />
            </div>
            <div>
                <img className="img2" src={copy2} alt="copy" width={300} height={500} />
            </div>
            <div>
                <img className="img3" src={copy3} alt="copy" width={300} height={300} />
            </div>
            <div>
                <img className="img4" src={copy4} alt="copy" width={250} height={400} />
            </div>
            <div>
                <img className="img5" src={copy5} alt="copy" width={300} height={700} />
            </div>
        </div>
    )
}

export default Portfolio;