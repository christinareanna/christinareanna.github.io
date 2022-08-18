import React from 'react';
import Sidebar from '../components/Sidebar';
import ReservationDashboard from "../ReservationDashboard.png";
import NewReservation from "../NewReservation.png";
// import NewTable from "../NewTable.png";
// import Search from "../Search.png";
import { AiOutlineGithub } from 'react-icons/ai';
import { SiHeroku } from 'react-icons/si'


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
            <div className='blog-container'>
                <h1 className='blog-title'>Thinkful Bootcamp Final Project</h1>
                <div className='project-link'><a href='https://github.com/christinareanna/final-capstone-project-thinkful' rel='noreferrer' target='_blank' aria-label='Github'><AiOutlineGithub className="icon" size={70} /></a>
                <a href="https://final-capstone-front-end.herokuapp.com/dashboard" rel='noreferrer' target='_blank'><SiHeroku className="icon" size={70} /></a></div>
                <div className='project-pictures'>
                    {/* TODO- Come back to fix the images and import them again :) */}
                    <div><img className='reservation' src={ReservationDashboard} alt='reservation' width={500} height={300}></img></div>
                    <div><img className='reservation' src={NewReservation} alt='reservation' width={500} height={300}></img></div>
                    {/* <div><img className='reservation' src={NewTable} alt='table' width={500} height={300}></img></div>
                    <div><img className='reservation' src={Search} alt='search' width={500} height={300}></img></div> */}
                </div>
            </div>
            <hr style={{ border: "none" }} />
        </>
    );
};

export default Projects;