import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Layout from './Layout';
import Sidebar from '../components/Sidebar'
import { AiOutlineGithub, AiOutlineHtml5 } from 'react-icons/ai';
import { FaReact, FaGit, FaJs, FaCss3 } from 'react-icons/fa';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    // const PageNotFound = () => (
    //     <div>404 not found.</div>
    // )

    return (
        <>
            {/* <Navbar />
            <h3 className='home'>About me</h3>
            <hr style={{ border: "none" }} />
            <p className='title'>Proficient in...</p>
            <p className='about-me'>
                <AiOutlineGithub size={30} />
                <FaReact size={30} /></p> */}
            {/* <Navbar toggle={toggle} /> */}
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <h3 className='home'>About me</h3>
            <hr />
            <p className='title'>Knowledgeable in...</p>
            {/* <div class="container">
                <div class="row">
                    <div class="col-md">
                        One of three columns
                    </div>
                    <div class="col-md">
                        One of three columns
                    </div>
                    <div class="col-md">
                        One of three columns
                    </div>
                </div> */}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <AiOutlineGithub className="icon" size={70} />
                        <AiOutlineHtml5 className="icon" size={70} />
                        <FaReact className="icon" size={70} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <FaGit className="icon" size={70} />
                        <FaJs className="icon" size={70} />
                        <FaCss3 className="icon" size={70} />
                    </div>
                </div>
            </div>
        </>
    )
}

/*  <>
                <div className='sidebar'>
                    <Sidebar isopen={isOpen} toggle={toggle} />
                </div>
                <h3 className='home'>About me</h3>
                <hr style={{ border: "none" }} />
                <p className='title'>Proficient in...</p>
                <p className='about-me'>
                    <AiOutlineGithub size={30} />
                    <FaReact size={30} /></p>
                {/* <Navbar toggle={toggle} />
            </>
            ) :
            <>
                <Navbar />
                <h3 className='home'>About me</h3>
                <hr style={{ border: "none" }} />
                <p className='title'>Proficient in...</p>
                <p className='about-me'>
                    <AiOutlineGithub size={30} />
                    <FaReact size={30} /></p>
                {/* <Navbar toggle={toggle} />
            </> */

export default Home;
