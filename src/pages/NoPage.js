import React from "react";
import Pikachu from "../surprisedpikachu.jpeg";
import { Link } from "react-router-dom";


const NoPage = () => {
    return (
        <>
            <img className="pikachu" src={Pikachu} alt="surprised pikachu face because nothing is here lol" />
            <h2 style={{ color: "black" }}>OH NO NOTHING IS HERE WHAT HAVE YOU DONE?!?</h2>
            <Link to="/"><button className="button">Go Home</button></Link>
        </>
    )
};

export default NoPage;