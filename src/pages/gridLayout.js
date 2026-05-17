import React from 'react';
import progress from "../images/1.png";
import fitness from "../images/2.png";
import electric from "../images/3.png";
import momsday from "../images/MomDay.png";
import basketball from "../images/basketball.png";
import gifting from "../images/gifting.jpg";
import headphones from "../images/headphones.png";
import headphones2 from "../images/headphones2.png";
import headphones3 from "../images/headphones3.png";

import './gridStyle.css';

const Grid = () => {
  const pins = [
    {
      id: 1,
      title: "Segmented Gifting",
      modules: [gifting],
      author: "B2C Retail",
      description: "Persona-based email for holiday gifts."
    },
    {
      id: 2,
      title: "March Madness",
      modules: [basketball],
      author: "B2C Retail",
      description: "Engagement-driven email that builds excitement and drives action."
    },
    {
      id: 3,
      title: "Mother's Day",
      modules: [momsday],
      author: "B2C Retail",
      description: "Emotional trigger email promoting gifts for mom."
    },
    {
      id: 4,
      title: "Health & Wellness",
      modules: [progress, fitness, electric],
      author: "B2C Retail",
      description: "Motivating email promoting tech for sustainable living."
    },
    {
      id: 5,
      title: "Audio Storytelling",
      modules: [headphones, headphones2, headphones3],
      author: "B2C Retail",
      description: "Lifestyle email focusing on the experience of using headphones."
    },
  ];

  return (
    <div className="masonry-container">
      {pins.map((pin) => (
        <div key={pin.id} className="pin-card">
          <div className="email-modules-stack">
            {pin.modules.map((moduleImg, index) => (
              <img
                key={index}
                src={moduleImg}
                alt={`Module ${index + 1}`}
                className="email-module-segment"
              />
            ))}
            {/* <div className="pin-overlay">
              <button className="pin-save-btn">Read more</button>
            </div> */}
          </div>
          <div className="pin-info">
            <h3 className="pin-title">{pin.title}</h3>
            <p className="pin-description">{pin.description}</p>
            <div className="pin-author-row">
              <span className="portfolio-tag">{pin.author}</span>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Grid;
