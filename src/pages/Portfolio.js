import React from "react";
import copy1 from "../images/copy1.jpg";
import copy2 from "../images/copy2.jpg";
import copy3 from "../images/copy3.jpg";
import copy4 from "../images/copy4.jpg";
import copy5 from "../images/copy5.jpg";
import "./Portfolio.css";
// import Navbar from "./components/Navbar";
// import Sidebar from "../components/Sidebar";

function Portfolio() {

    return (
        <div class="parent">
            {/* <Navbar/> */}
            <div>
                <img class="img1" src={copy1} alt="copy" width={200} height={400} />
            </div>
            <div>
                <img class="img2" src={copy2} alt="copy" width={200} height={400} />
            </div>
            <div>
                <img class="img3" src={copy3} alt="copy" width={700} height={300} />
            </div>
            <div>
                <img class="img4" src={copy4} alt="copy" width={250} height={400} />
            </div>
            <div>
                <img class="img5" src={copy5} alt="copy" width={300} height={400} />
            </div>
        </div>
    )
}

export default Portfolio;