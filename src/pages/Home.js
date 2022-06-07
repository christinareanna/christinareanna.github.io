import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Layout from './Layout';
import { AiOutlineGithub } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa';


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
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <h3 className='home'>About me</h3>
            <hr style={{ border: "none" }} />
            <p className='title'>Proficient in...</p>
            <p className='about-me'>
                <AiOutlineGithub size={30} />
                <FaReact size={30} /></p>
            {/* <Navbar toggle={toggle} /> */}
        </>
    )
}

export default Home;
