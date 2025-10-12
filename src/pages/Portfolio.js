import React from "react";
import progress from "../images/1.png";
import fitness from "../images/2.png";
import electric from "../images/3.png";
import headphones1 from "../images/headphones.png";
import headphones2 from "../images/headphones2.png";
import headphones3 from "../images/headphones3.png";
// import dogtrainingemail from "../images/dogtrainingemail.png";
// import article from "../images/articlewritingexample.png";
import gaming1 from "../images/gaming1.png";
import gaming2 from "../images/gaming2.png";
import gaming3 from "../images/gaming3.png";
import food from "../images/PlayfulHotdogAd.png";
import coffee from "../images/CoffeePromoPoster.png";
import cupcake from "../images/CupcakeAdFlyer.png";
import "./Portfolio.css";
import Carousels from "./Carousels.js";

function Portfolio() {

    return (
        <div className="project-container">
            <div className="global-container">
                <h2>Email Copywriting Examples</h2>
                <p>These are a few email examples I've written for a large retail tech client.
                    Due to an NDA, I have redesigned them.</p>
            </div>

            <div className="row">
                <div className="fitness">
                    <img className="img10" src={progress} alt="copy" />
                    <img className="img10" src={fitness} alt="copy" />
                    <img className="img10" src={electric} alt="copy" />
                    <div className="img-text">
                        <p>
                            Strategy: Motivates the reader to embrace personal growth,
                            boost their fitness, and consider new options. Including specific keywords
                            to empower the reader, influencing them to consider what tech they need
                            to more effectively reach their goals.
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
                    <div className="img-text">
                        <p>
                            Strategy: Highlights the reader's listening experience
                            by diving into the emotional side of sound.
                            This strategy hones in on the benefits someone
                            gets when they buy specific audio tech, and
                            the imagery inspires them to explore the
                            possibilities around using tech in different situations.
                            Whether they're a gamer or enjoy going for walks, this
                            copy inspires them to bring the tech along with them.
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
                    <div className="img-text">
                        <p>
                            Strategy: It's simple. Gamers want information as quickly as
                            possible, and this copy is short, smart, and scroll-stopping worthy.
                            It emphasizes the versatility of gaming tech while utilizing
                            specific keywords that are relevant to gaming in general.
                        </p>
                    </div>
                </div>
                <div className="global-container">
                    <h2>Copy Mock Ads</h2>
                    <p>A few examples of my playful, parody mock ads that I create in my spare time.</p>
                </div>
                <div className="mockads">
                    <br />
                    <img className="mockad" src={food} alt="copy" />
                    <img className="mockad" src={coffee} alt="copy" />
                    <img className="mockad" src={cupcake} alt="copy" />
                </div>
            </div>

            <div className="global-container">
                <h2>Social Media Copy for The Spoonie Club</h2>
                <p>Some of my favorite posts for a community I created in March 2025 
                    called @the_spoonie_club. With over 1,000 followers, we are rapidly growing. 
                    I grow my audience through SEO best practices and create my posts in Canva.</p>
            </div>
            <Carousels />
            <div className="global-container">
                <h2>Want to see more?</h2>
                <p><a href="https://www.linkedin.com/in/christinareannaknapp/">Reach out to me</a> directly for more copy examples
                    and stay tuned to see my software engineering portfolio.</p>
            </div>
        </div>
    );
}

export default Portfolio;
