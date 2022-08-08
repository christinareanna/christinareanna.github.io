import React, { useState } from 'react';
import Avatar from "../avatar.jpg"
import Thinkful from "../thinkfulimg.png"
import Sidebar from '../components/Sidebar'
import { AiOutlineGithub, AiOutlineHtml5 } from 'react-icons/ai';
import { FaReact, FaGit, FaJs, FaCss3 } from 'react-icons/fa';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className='home-div'>
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <div className='img-div'>
                <img class="avatar" src={Avatar} alt="" />
            </div>
            <h1 className='home'>About me</h1>
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
                <hr />
            </div>
            <div className='about-container'>
                <h1 className='about-title'>Welcome to my personal site!</h1>
                <p className='about-me'>Thank you for stopping by. This website is part of my portfolio as I explore and learn more about JavaScript, HTML/CSS,
                    React, and various libraries. In 2021, I injured myself at my previous job at the airport. I spent a lot of time on light duty and would bring
                    my laptop so I can take free courses to learn how to code. Eventually, I put two and two together and decided on a software engineering bootcamp called Thinkful.
                    I quit my job, enrolled into school, packed my bags, and moved back home to Chicago. It was the perfect time for a move since I felt like spending five
                    years in Seattle was well spent and it was time for a change. I have a certificate in the Software Engineering Immersion class and graduated in February 2022.
                    I've been an apprentice at Accenture in Chicago since March 2022 and loving the journey I'm on. My blogs will soon be automated using a CMS (Content Management System) 
                    and I'll be adding/editing my projects section to include more links and live demos of them. Stay tuned!
                </p>
                <span><img className="thinkful" src={Thinkful} alt="thinkful"></img></span>
            </div>
            <hr />
        </div>
    )
}

export default Home;
