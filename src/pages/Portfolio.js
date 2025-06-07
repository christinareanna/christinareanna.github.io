import React from "react";
import progress from "../images/1.png";
import fitness from "../images/2.png";
import electric from "../images/3.png";
import headphones1 from "../images/headphones.png";
import headphones2 from "../images/headphones2.png";
import headphones3 from "../images/headphones3.png";
import dogtrainingemail from "../images/dogtrainingemail.png";
import article from "../images/articlewritingexample.png";
import listicle from "../images/listiclewritingexample.png";
import gaming1 from "../images/gaming1.png";
import gaming2 from "../images/gaming2.png";
import gaming3 from "../images/gaming3.png";
import "./Portfolio.css";
import Carousels from "./Carousels.js";

function Portfolio() {

    return (
        <div className="project-container">
            <div className="global-container">
                <h2>My Recent Projects</h2>
                <p>Below are some projects for a large retail tech client.
                    <br />
                    Due to an NDA, these have been redesigned.</p>
            </div>

            <div className="row">
                <div className="fitness">
                    <img className="img10" src={progress} alt="copy" />
                    <img className="img10" src={fitness} alt="copy" />
                    <img className="img10" src={electric} alt="copy" />
                    <div className="overlay">
                        <p>
                            Motivates the reader to embrace personal growth, boost their fitness, and consider new options.
                        </p>
                    </div>
                </div>
                <div className="fitness">
                    <br />
                    <hr />
                    <br />
                    <img className="img10" src={headphones1} alt="copy" />
                    <img className="img10" src={headphones2} alt="copy" />
                    <img className="img10" src={headphones3} alt="copy" />
                    <div className="overlay">
                        <p>
                            Highlights the reader's listening experience by connecting them to the emotional side of sound.
                        </p>
                    </div>
                </div>
                <div className="fitness">
                    <br />
                    <hr />
                    <br />
                    <img className="img10" src={gaming1} alt="copy" />
                    <img className="img10" src={gaming2} alt="copy" />
                    <img className="img10" src={gaming3} alt="copy" />
                    <div className="overlay">
                        <p>
                            Gamers want information as quickly as possible. Short, smart, and click-worthy copy is the strategy.
                        </p>
                    </div>
                </div>
                <div className="global-container">
                    <h2>Copy Mock Ups</h2>
                    <p>Click any image to give the copy a closer read.</p>
                </div>
                <div className="fitness">
                    <a href={dogtrainingemail} target="_blank" rel="noopener noreferrer">
                        <img className="dogtrainingemail" src={dogtrainingemail} alt="copy" />
                    </a>
                </div>
                <div className="fitness">
                    <br />
                    <hr />
                    <br />
                    <a href={article} target="_blank" rel="noopener noreferrer">
                        <img className="article" src={article} alt="copy" />
                    </a>
                </div>
                <div className="fitness">
                    <br />
                    <hr />
                    <br />
                    <a href={listicle} target="_blank" rel="noopener noreferrer">
                        <img className="listicle" src={listicle} alt="copy" />
                    </a>
                </div>
            </div>

            <div className="global-container">
                <h2>The Spoonie Club Instagram Posts</h2>
                <p>These are a few posts I created for my new Instagram group called the_spoonie_club.
                    A spoonie is someone with a chronic illness who has to manage their energy carefully each day.</p>
            </div>
            <Carousels />
        </div>
    );
}

export default Portfolio;
