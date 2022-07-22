import React, { useState } from 'react';
import Avatar from "../avatar.jpg"
import Sidebar from '../components/Sidebar'
import { AiOutlineGithub, AiOutlineHtml5 } from 'react-icons/ai';
import { FaReact, FaGit, FaJs, FaCss3 } from 'react-icons/fa';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <div className='img-div'>
                <img src={Avatar} alt="" />
            </div>
            <h3 className='home'>About me</h3>
            <hr />
            <p className='title'>Knowledgeable in...</p>
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

export default Home;
