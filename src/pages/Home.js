import React, { useState } from 'react';
// import portrait from "../images/portrait.jpeg";
import img_1 from "../images/img_1.jpg";
import img_2 from "../images/img_2.jpg";
// import ChristinaKnappResume from "../images/ChristinaKnappResume.jpeg";
// import img_3 from "../images/img_3.jpg";
// import Thinkful from "../thinkfulimg.png"
import Sidebar from '../components/Sidebar'
import "../darkMode.css";
import "../App.css";
import ResumeLink from '../components/ResumeLink';

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
                <img className="avatar" src={img_2} alt="me" />
            </div>
            <img className="avatar" src={img_1} alt="me" />
            <div className={`Home ${theme}`}>
                <div class="card">
                    <div class="card-body">
                        <h2>About Me</h2>
                        <p className='about-me'>Thanks to my handy-dandy software engineering education from Thinkful,
                            I was able to build this entire website using React.js. But anyway, what else do I bring to the table?
                            <br></br>
                            Well, my specialty is identifying gaps and creating innovative solutions through effective collaboration and communication.
                            I'm driven by a passion for improving the user experience, and my approach to writing is centered on
                            creating content that resonates with target audiences and drives engagement. With over a year of copywriting
                            experience, I'm continually growing my skill in crafting copy that enhances the user's
                            journey through intuitive design and persuasive calls to action.
                            <br></br>
                            Sound interesting? <ResumeLink />
                            <br></br>
                            Password to my portfolio: NewEraOfWritingUnlocked
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
