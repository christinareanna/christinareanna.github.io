import React, { useState } from 'react';
import img_1 from "../images/img_1.jpg";
import copywriter1 from "../images/copywriter1.png";
import copywriter2 from "../images/copywriter2.png";
import Sidebar from '../components/Sidebar'
import "../darkMode.css";
import "../App.css";

const Home = ({ theme }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='container-fluid'>
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <div>
                <img className="avatar" src={img_1} alt="me" />
                <div id="target">
                    Christina Knapp
                </div>
                <div>
                    <p>Strategic copywriter at Accenture in Chicago.
                        <br></br>
                        Inspired by tech, data, and the customer journey.
                        <br></br>
                        Powered by an education in software engineering.
                    </p>
                </div>
            </div>
            <div>
                <img className="why" src={copywriter1} alt="Details about Christina" />
            </div>
            <div>
                <img className="why" src={copywriter2} alt="Details about Christina" />
            </div>
            <div className='button'>
                <a href="https://www.christinareanna.com/portfolio"><button>Dive Into My Work</button></a>
            </div>
            {/* <div className={`Home ${theme}`}>
            </div> */}
        </div >
    )
}

export default Home;
