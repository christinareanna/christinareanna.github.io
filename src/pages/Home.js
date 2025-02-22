import React from 'react';
// import img_1 from "../images/img_1.jpg";
// import copywriter1 from "../images/copywriter1.png";
// import copywriter2 from "../images/copywriter2.png";
// import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';
// import Projects from './Projects';
// import { ReactComponent as Google } from "../images/google-svgrepo-com.svg";
// import { ReactComponent as BestBuy } from "../images/best-buy-svgrepo-com.svg";
import { ReactComponent as Arrow } from "../images/down-lg-svgrepo-com.svg";
import UpArrow from "../images/uparrow.png";
// import { ReactComponent as RightArrow } from "../images/rightarrow.svg";
// import Grill from "../images/grilllikeapro.png";
import Portfolio from './Portfolio';
import Projects from './Projects';
import SelfImage from "../images/selfportrait.png";
// import "../darkMode.css";
import "../App.css";

const Home = () => {
    // const [isOpen, setIsOpen] = useState(false)
    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // };

    return (
        <div className='container-fluid'>
            {/* <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div> */}
            <div id="up" className='about-me'>
                <h1 className='about-h1'>
                    <strong>Creating
                        <br></br>
                        Impact.</strong>
                </h1>
                <p>
                    <br></br>
                    Hi, I'm Christina. 👋
                    <br></br>
                    Copywriter in Chicago.
                    <br></br>
                    Inspired by the user experience.
                    <br></br>
                    Powered by an education in software engineering.
                </p>
                <img className="self-img" src={SelfImage} alt="me" />
            </div>
            <div className='button'>
                <a href="#down"><button>DIVE INTO MY WORK <Arrow /></button></a>
            </div>
            <div id="down">
                <Portfolio />
            </div>
            <div>
                <Projects />
            </div>
            <div className='button'>
                <a href="#up"><button>GO BACK UP <img src={UpArrow} alt="up arrow" /></button></a>
            </div>
        </div >
    )
}

export default Home;
