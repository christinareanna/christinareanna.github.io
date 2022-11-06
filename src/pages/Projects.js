import React from 'react';
import Sidebar from '../components/Sidebar';
import ReservationDashboard from "../ReservationDashboard.png";
import NewReservation from "../NewReservation.png";
import PomodoroTimer from "../Pomodoro-Timer.png";
import PomodoroTimerBreak from "../Pomodoro-Timer-Break.png";
import LandingPage from "../landingpage.png";
// import NewTable from "../NewTable.png";
// import Search from "../Search.png";
import { AiOutlineGithub } from 'react-icons/ai';
import { SiHeroku, SiNetlify } from 'react-icons/si'


// import Navbar from '../components/Navbar';

// this will be automated so i don't have to type it in here every dang time :-)
const Projects = ({ isOpen, toggle }) => {
    return (
        <>
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            {/* <Navbar /> */}
            <h1 className='projects'>Projects</h1>
            <hr style={{ border: "none" }} />
            <div className='global-container'>
                <h1 className='global-title'>Periodic Tables</h1>
                <p className='global-paragraph'>An application to make reservations at a restaurant.</p>
                <div className='global'><a href='https://github.com/christinareanna/final-capstone-project-thinkful' rel='noreferrer' target='_blank' aria-label='Github'><AiOutlineGithub className="icon" size={70} /></a>
                <a href="https://final-capstone-front-end.herokuapp.com/dashboard" rel='noreferrer' target='_blank'><SiHeroku className="icon" size={70} /></a></div>
                <div className='project-pictures'>
                    {/* TODO- Come back to fix the images and import them again :) */}
                    <div><img className='reservation' src={ReservationDashboard} alt='reservation'></img></div>
                    <div><img className='reservation' src={NewReservation} alt='reservation'></img></div>
                    {/* <div><img className='reservation' src={NewTable} alt='table' width={500} height={300}></img></div>
                    <div><img className='reservation' src={Search} alt='search' width={500} height={300}></img></div> */}
                </div>
            </div>
            <hr style={{ border: "none" }} />
            <div className='global-container'>
                <h1 className='global-title'>Pomodoro Timer</h1>
                <p className='global-paragraph'>A pomodoro timer that plays an audio after each focus and break session.</p>
                <div className='global'><a href='https://github.com/christinareanna/Pomodoro-Timer' rel='noreferrer' target='_blank' aria-label='Github'><AiOutlineGithub className="icon" size={70} /></a>
                <a href="https://christina-pomodoro-timer.netlify.app/" rel='noreferrer' target='_blank'><SiNetlify className="icon" size={70} /></a></div>
                <div className='project-pictures'>
                    {/* TODO- Come back to fix the images and import them again :) */}
                    <div><img className='reservation' src={PomodoroTimer} alt='timer'></img></div>
                    <div><img className='reservation' src={PomodoroTimerBreak} alt='timer'></img></div>
                </div>
            </div>
            <hr style={{ border: "none" }} />
            <div className='global-container'>
                <h1 className='global-title'>Pause</h1>
                <p className='global-paragraph'>The beginning stages of my design for a service application for service workers called Pause.</p>
                <div className='global'><a href='https://github.com/christinareanna/serviceapplandingpage' rel='noreferrer' target='_blank' aria-label='Github'><AiOutlineGithub className="icon" size={70} /></a>
                <a href="https://pause-service-site.netlify.app/" rel='noreferrer' target='_blank'><SiNetlify className="icon" size={70} /></a></div>
                <div className='project-pictures'>
                    {/* TODO- Come back to fix the images and import them again :) */}
                    <div><img className='reservation' src={LandingPage} alt='timer'></img></div>
                </div>
            </div>
            <hr style={{ border: "none" }} />
        </>
    );
};

export default Projects;