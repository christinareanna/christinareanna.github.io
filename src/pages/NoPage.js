import React from "react";
import Pikachu from "../images/surprisedpikachu.jpeg";
import { Link } from "react-router-dom";
import "../App.css";
import "../darkMode.css";


const NoPage = () => {
    return (
        <div className="nopage">
            <div>
                <img className="pikachu" src={Pikachu} alt="surprised pikachu face because nothing is here lol" />
            </div>
            <Link to="/"><button className="contact-button">Go Home</button></Link>
        </div>
    )
};

export default NoPage;