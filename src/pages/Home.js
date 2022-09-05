import React, { useState } from 'react';
import newHero from "../newhero.jpg"
// import Thinkful from "../thinkfulimg.png"
import Sidebar from '../components/Sidebar'
import { AiOutlineGithub, AiOutlineHtml5 } from 'react-icons/ai';
import { FaReact, FaGit, FaJs, FaCss3 } from 'react-icons/fa';


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
                <img class="avatar" src={newHero} alt="" />
            </div>
            <h1 className='home'>About me</h1>
            <hr />
            <h2>Knowledgeable in...</h2>
            <div>
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
                <hr />
            </div>
            <div className='global-container'>
                <p className='global'>I started learning HTML & CSS when I was a very small, young human who had no idea the complexity that lied beneath.
                    I've had an interest in web design for many years and decided to join a coding bootcamp called Thinkful in September 2021. I graduated in February 2022
                    and started at Accenture in March 2022.</p>
                {/* <span><img className="thinkful" src={Thinkful} alt="thinkful"></img></span> */}
                <hr />
                <p className='global'>I feel like I've lived many lives, but that could be because I did retail for many years. I desperately wanted a change in my life and
                    did some soul searching and came to the conclusion that at the core of my being, I am an artist.
                    I decided that web design, specifically front-end, was where my passion really was. I could finally combine everything I love into one beautiful package.
                    Feel free to tag along on the journey of me screaming at my computer and then successfully doing the things and stuff.</p>
            </div>
            <hr />
        </div>
    )
}

export default Home;
