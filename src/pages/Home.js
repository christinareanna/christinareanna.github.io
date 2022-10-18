import React, { useState } from 'react';
import newHero from "../newhero.jpg"
// import Thinkful from "../thinkfulimg.png"
import Sidebar from '../components/Sidebar'
import { AiOutlineHtml5, AiOutlineCaretRight, AiOutlineCaretDown } from 'react-icons/ai';
import { FaReact, FaGit, FaJs, FaCss3 } from 'react-icons/fa';
import confused from "../thinking.png";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    };


    function ChangeIcon() {
        return isOpen ? (
            <>
                <button className="readmore-btn" onClick={toggle}>Read More <AiOutlineCaretDown /></button>
                <div className='global-container'>
                    <img src={confused} alt="very confuzzled emoji" />
                    <p className='paragraph-explain'>
                        I know what you're thinking. Christina! I don't know what these icons mean! That's okay.
                        Basically, I'm very interested in front-end development and adding functionality to websites.
                        From left to right, we have HTML, React, git, JavaScript, and CSS. With all of these combined,
                        it makes me feel like I'm playing on a playground. HTML is code to structure web pages and its content.
                        React is a JavaScript library, which lets developers create user interfaces quickly. 
                        Git is a free and open source software that helps with tracking any changes in
                        files and is used to collaborate on projects, no matter the size of the project, quickly and efficiently.
                        JavaScript is a programming language that works alongside HTML and CSS, that helps with the functionality
                        of elements on a page. Lastly, CSS is Cascading Style Sheets and it helps with how you want to style elements
                        on a page and the way they are displayed.
                    </p>
                </div>
            </>
        ) : (
            <button className="readmore-btn" onClick={toggle}>Read More <AiOutlineCaretRight /></button>
        )
    }



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
            <h2>Passionate about...</h2>
            <hr />
            <div>
                <div className='row'>
                    <div className='col'>
                        <AiOutlineHtml5 className="icon" />
                        <FaReact className="icon" />
                        <FaGit className="icon" />
                        <FaJs className="icon" />
                        <FaCss3 className="icon" />
                    </div>
                    <div className='read-more'>
                        <ChangeIcon />
                    </div>
                </div>
                <h1 className='home'>About me</h1>
                <hr />
            </div>
            <div className='global-container'>
                <p className='global'>I started learning HTML & CSS when I was a very small, young human who had no idea the complexity that lied beneath.
                    I've had an interest in design & software engineering for many years and decided to join a coding bootcamp called Thinkful in September 2021. I graduated in February 2022
                    and started at Accenture in March 2022.</p>
                {/* <span><img className="thinkful" src={Thinkful} alt="thinkful"></img></span> */}
                <hr />
                <p className='global'>I feel like I've lived many lives, but that could be because I did retail for many years. I desperately wanted a change in my life and
                    did some soul searching and came to the conclusion that at the core of my being, I am an artist.
                    I decided that software engineering, specifically front-end, was where my passion really was. I could finally combine everything I love into one beautiful package.
                    Feel free to tag along on the journey of me screaming at my computer and then successfully doing the things and stuff.</p>
            </div>
            <hr />
        </div>
    )
}

export default Home;
