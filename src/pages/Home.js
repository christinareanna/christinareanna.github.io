import React, { useState } from 'react';
import portrait from "../images/portrait.jpeg"
// import Thinkful from "../thinkfulimg.png"
import Sidebar from '../components/Sidebar'
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BiLogoGoogleCloud } from "react-icons/bi";
import { FaReact, FaGit, FaJs, FaCss3, FaPython, FaAws } from 'react-icons/fa';
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
                    Christina Reanna Knapp
                </div>
                <div id="desc">
                    Analyst at Accenture
                </div>
                <img class="avatar" src={portrait} alt="me" />
            </div>
            <h2 className='home-title'>Passionate about...</h2>
            <div>
                <div className='row'>
                    <div className='col'>
                        <div class="tooltip top"><AiOutlineHtml5 className="icon" /></div>
                        <div class="tooltip top2"><FaReact className="icon" /></div>
                        <div class="tooltip top3"><FaGit className="icon" /></div>
                        <div class="tooltip top4"><FaJs className="icon" /></div>
                        <div class="tooltip top5"><FaCss3 className="icon" /></div>
                    </div>
                </div>
                <h2 className='home-title'>Currently learning...</h2>
                <div>
                    <div className='row'>
                        <div className='col'>
                            <div class="tooltip top6"><FaPython className='icon' /></div>
                            <div class="tooltip top7"><BiLogoGoogleCloud className='icon' /></div>
                            <div class="tooltip top8"><FaAws className='icon' /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`Home ${theme}`}>
                {theme === "dark" ?
                    <div class="card">
                        <h2 class="card-header">About Me</h2>
                        <div class="card-body">
                            <p class="card-text">Hi! Thanks for stopping by. My name is Christina and I currently
                                reside in Chicago. I'm currently an analyst at Accenture.
                                I graduated from a software engineering bootcamp called Thinkful in February 2022.
                                I started as an apprentice in March 2022, and got promoted to analyst in March 2023.
                                I do a variety of different projects at my job, including user experience research,
                                technical writing, and front-end development with a focus on accessibility.
                                I am always learning as I go, and I love receiving feedback on how I can improve on things.</p>
                        </div>
                    </div>
                    :
                    <div class="card">
                        <h2 class="card-header">About Me</h2>
                        <div class="card-body">
                            <p class="card-text">Hi! Thanks for stopping by. My name is Christina and I currently
                                reside in Chicago. I'm currently an analyst at Accenture.
                                I graduated from a software engineering bootcamp called Thinkful in February 2022.
                                I started as an apprentice in March 2022, and got promoted to analyst in March 2023.
                                I do a variety of different projects at my job, including user experience research,
                                technical writing, and front-end development with a focus on accessibility.
                                I am always learning as I go, and I love receiving feedback on how I can improve on things.</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Home;
