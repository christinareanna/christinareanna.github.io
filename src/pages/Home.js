import React from 'react';
import newHero from "../images/newhero.jpg";

const Home = () => {

    return (
        <div className='container-fluid'>
            <img src={newHero} alt='Chris'/>
            <div id="up" className='about-me'>
                <p className='about-me'>
                    <br></br>
                    <br></br>
                    <strong>
                        Hi, I'm Chris. 👋
                    </strong>
                    <br></br>
                    Analyst at Accenture.
                    <br></br>
                    Copywriter for the #1 consumer tech specialty retailer in the U.S.
                    <br></br>
                    Website is a work in progress as I update the layout.
                </p>
                {/* <img className="self-img" src={SelfImage} alt="me" /> */}
            </div>
        </div >
    )
}

export default Home;