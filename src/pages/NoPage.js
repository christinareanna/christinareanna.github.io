import React from "react";
import Pikachu from "../images/surprisedpikachu.jpeg";
import { Link } from "react-router-dom";


const NoPage = () => {
    return (
        <>
        <div>
            <img className="pikachu" src={Pikachu} alt="surprised pikachu face because nothing is here lol" />
        </div>
            <Link to="/"><button className="button">Go Home</button></Link>
        </>
    )
};

export default NoPage;