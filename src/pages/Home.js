import React, { useState } from 'react';
// import portrait from "../images/portrait.jpeg";
import img_1 from "../images/img_1.jpg";
import img_2 from "../images/img_2.jpg";
// import img_3 from "../images/img_3.jpg";
// import Thinkful from "../thinkfulimg.png"
import Sidebar from '../components/Sidebar'
import "../darkMode.css";

const Home = ({ theme }) => {
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
                    Hi, I'm Christina.
                </div>
                <div id="desc">
                    A lover of the arts in Chicago.
                </div>
                <img class="avatar" src={img_2} alt="me" />
            </div>
                <img class="avatar" src={img_1} alt="me" />
            <div className={`Home ${theme}`}>
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">I'm someone who...</p>
                        <p class="card-text">Prefers they/them pronouns.</p>
                        <p class="card-text">Currently writes for a living.</p>
                        <p class="card-text">Always asks questions.</p>
                        <p class="card-text">Cares about the user experience.</p>
                        <p class="card-text">Is sober from alcohol.</p>
                        <p class="card-text">Learns new things constantly.</p>
                        <p class="card-text">Loves their Nintendo Switch.</p>
                        <p class="card-text">Cares about mental wellness.</p>
                        <p class="card-text">Openly talks about having ADHD.</p>
                        <p class="card-text">Went to Thinkful bootcamp for software engineering.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
