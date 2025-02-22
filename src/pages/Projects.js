import React from 'react';
// import Sidebar from '../components/Sidebar';
// import ReservationDashboard from "../ReservationDashboard.png";
// import NewReservation from "../NewReservation.png";
import PomodoroTimer from "../images/Pomodoro-Timer.png";
import PomodoroTimerBreak from "../images/Pomodoro-Timer-Break.png";
import website1 from "../images/website1.jpg";
import website2 from "../images/website2.jpg";
import beth from "../images/bethanyspieshop.png";
// import LandingPage from "../landingpage.png";
import ClockOutCrew from "../images/clockoutcrew.png";
// import NewTable from "../NewTable.png";
// import Search from "../Search.png";
import { AiOutlineGithub } from 'react-icons/ai';
import advice from "../images/frontendadvice.png";
import { SiNetlify } from 'react-icons/si';
import "./Projects.css";


// import Navbar from '../components/Navbar';

// this will be automated so i don't have to type it in here every dang time :-)
const Projects = () => {
    return (
        <>
            {/* <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div> */}
            {/* <Navbar /> */}
            <div className='project-container'>
                <h1>FRONT-END DEVELOPMENT</h1>
                <div className='global-container'>
                    <strong>
                        <p>Pomodoro Timer</p>
                    </strong>
                    <p>A timer that plays an audio after each focus and break session. <br /> Built while attending Thinkful Bootcamp.</p>
                    <div className='global'><a href='https://github.com/christinareanna/Pomodoro-Timer' rel='noreferrer' target='_blank' aria-label='Github'><AiOutlineGithub className="icon" size={70} /></a>
                        <a href="https://christina-pomodoro-timer.netlify.app/" rel='noreferrer' target='_blank'><SiNetlify className="icon" size={70} /></a></div>
                    <div className='project-pictures'>
                        {/* TODO- Come back to fix the images and import them again :) */}
                        <div><img className='project' src={PomodoroTimer} alt='timer'></img></div>
                        <div><img className='project' src={PomodoroTimerBreak} alt='timer'></img></div>
                    </div>
                </div>
                <div className='global-container'>
                    <strong>
                        <p>Random Advice Generator</p>
                    </strong>
                    <p>A random advice generator built with React, HTML, and CSS. <br /> Fetches advice from the Advice Slip API.</p>
                    <div className='global'><a href='https://github.com/christinareanna/advice-generator/tree/master' rel='noreferrer' target='_blank' aria-label='Github'><AiOutlineGithub className="icon" size={70} /></a>
                        <a href="https://christina-random-advice-generator.netlify.app/" rel='noreferrer' target='_blank'><SiNetlify className="icon" size={70} /></a></div>
                    <div className='project-pictures'>
                        {/* TODO- Come back to fix the images and import them again :) */}
                        <div><img className='project' src={advice} alt='timer'></img></div>
                    </div>
                </div>
                <div className='global-container'>
                    <strong>
                        <p>Bethany's Pie Shop</p>
                    </strong>
                    <p>A mockup website built with JavaScript, HTML, and SCSS.</p>
                    <div className='global'><a href='https://github.com/christinareanna/BethanysPieShop' rel='noreferrer' target='_blank' aria-label='Github'><AiOutlineGithub className="icon" size={70} /></a>
                        <a href="https://bethanys-pieshop.netlify.app/pages/" rel='noreferrer' target='_blank'><SiNetlify className="icon" size={70} /></a></div>
                    <div className='project-pictures'>
                        {/* TODO- Come back to fix the images and import them again :) */}
                        <div><img className='pie-project' src={beth} alt='timer'></img></div>
                    </div>
                </div>
                <div className='global-container'>
                    <strong>
                        <p>Future of Web 3.0</p>
                    </strong>
                    <p>Replicated a design with HTML and CSS.</p>
                    <div className='project-pictures'>
                        <div><img className='html-project' src={website1} alt='website'></img></div>
                    </div>
                </div>
                <div className='global-container'>
                    <strong>
                        <p>Front-end Development</p>
                    </strong>
                    <p>Replicated a design with HTML and CSS.</p>
                    <div className='project-pictures'>
                        <div><img className='html-project' src={website2} alt='website'></img></div>
                    </div>
                </div>
                <div className='global-container'>
                    <strong>
                        <p>Clock Out Crew</p>
                    </strong>
                    <p>A simple design for a mockup application built with React, HTML, and CSS.</p>
                    <div className='global'><a href='https://github.com/christinareanna/serviceapplandingpage' rel='noreferrer' target='_blank' aria-label='Github'><AiOutlineGithub className="icon" size={70} /></a></div>
                    <div className='project-pictures'>
                        <div><img className='project' src={ClockOutCrew} alt='timer'></img></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;