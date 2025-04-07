import React from 'react';
import Portfolio from './Portfolio';
import SelfImage from "../images/selfportrait.png";
import "../App.css";

const Home = () => {

    return (
        <div className='container-fluid'>
            <div id="up" className='about-me'>
                {/* <h1 className='about-h1-1'>
                    Creating
                </h1>
                <h1 className='about-h1-1'>
                    Impact.
                </h1> */}
                <p className='about-me'>
                    <br></br>
                    <strong>
                        Hi, I'm Christina. 👋
                    </strong>
                    <br></br>
                    Copywriter in Chicago.
                    <br></br>
                    Inspired by the user experience.
                    <br></br>
                    Powered by an education in software engineering.
                </p>
                <img className="self-img" src={SelfImage} alt="me" />
            </div>
            <Portfolio />
        </div >
    )
}

export default Home;
