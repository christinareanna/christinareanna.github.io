import React, { useState } from 'react';
// import portrait from "../images/portrait.jpeg";
import img_1 from "../images/img_1.jpg";
import img_2 from "../images/img_2.jpg";
// import img_3 from "../images/img_3.jpg";
// import Thinkful from "../thinkfulimg.png"
import Sidebar from '../components/Sidebar'
import "../darkMode.css";

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
                <div id="target">
                    Hi, I'm Christina.
                </div>
                <div id="desc">
                    Copywriter & Front-end Developer in Chicago.
                </div>
                <img class="avatar" src={img_2} alt="me" />
            </div>
            <img class="avatar" src={img_1} alt="me" />
            <div className={`Home ${theme}`}>
                <div class="card">
                    <div class="card-body">
                        <h2>About Me</h2>
                        <p className='about-me'>As an Analyst with an education in software engineering from Thinkful, my specialty
                            is in identifying gaps and creating innovative solutions through effective collaboration and communication.
                            Driven by a passion for improving the user experience, my approach to copywriting is centered on
                            creating content that resonates with audiences and drives engagement. With over a year of copywriting
                            experience, I believe in crafting messages that not only inform but also enhance the user
                            journey—whether through intuitive design or persuasive calls to action.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
