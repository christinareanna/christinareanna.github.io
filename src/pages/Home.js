import React, { useState } from 'react';
import newHero from "../newheroimg.jpeg"
// import Thinkful from "../thinkfulimg.png"
import Sidebar from '../components/Sidebar'
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaReact, FaGit, FaJs, FaCss3, FaPython, FaAws } from 'react-icons/fa';
import { SiMysql } from "react-icons/si";
// import confused from "../thinking.png";

const Home = () => {
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
                    Product Engineering Associate at Accenture.
                </div>
                <img class="avatar" src={newHero} alt="me" />
            </div>
            <h2 className='home-title'>Passionate about...</h2>
            <div>
                <div className='row'>
                    <div className='col'>
                        <AiOutlineHtml5 className="icon" />
                        <FaReact className="icon" />
                        <FaGit className="icon" />
                        <FaJs className="icon" />
                        <FaCss3 className="icon" />
                    </div>
                    {/* <div className='read-more'>
                        <ChangeIcon />
                    </div> */}
                </div>
                <h2 className='home-title'>Currently learning...</h2>
                <div>
                    <div className='row'>
                        <div className='col'>
                            <FaPython className='icon' />
                            <SiMysql className='icon' />
                            <FaAws className='icon' />
                        </div>
                    </div>
                </div>
            </div>
            <div class="card text-white bg-secondary mb-3">
                <div class="card-header">About Me</div>
                <div class="card-body">
                    <p class="card-text">27, non-binary software engineer and poet residing in Chicago.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
