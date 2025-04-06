import React, { useState } from "react";
import travel1 from "../images/traveltip1.png";
import travel2 from "../images/traveltip2.png";

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const images = [travel1, travel2];
    const length = images.length;

    const handlePrevious = () => {
        const newIndex = index === 0 ? length - 1 : index - 1;
        setIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = index === length - 1 ? 0 : index + 1;
        setIndex(newIndex);
    };

    return (
        <div className="carousel-container">
            {/* Left arrow div */}
            <div className="arrow arrow-left" onClick={handlePrevious}></div> 
            
            <div className="carousel-items-wrapper" style={{ transform: `translateX(-${index * 100}%)` }}>
                <div className="carousel-item">
                    <img className="travel-tip" src={images[0]} alt="travel tips" />
                </div>
                <div className="carousel-item">
                    <img className="travel-tip" src={images[1]} alt="travel tips" />
                </div>
            </div>

            {/* Right arrow div */}
            <div className="arrow arrow-right" onClick={handleNext}></div>
        </div>
    );
};

export default Carousel;
