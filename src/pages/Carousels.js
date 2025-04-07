import React, { useState } from "react";
import travel1 from "../images/traveltip1.png";
import travel2 from "../images/traveltip2.png";
import reminder1 from "../images/reminder-1.png";
import reminder2 from "../images/reminder-2.png";
import reminder3 from "../images/reminder-3.png";
import reminder4 from "../images/reminder-4.png";
import reminder5 from "../images/reminder-5.png";
import reminder6 from "../images/reminder-6.png";
import reminder7 from "../images/reminder-7.png";

const Carousels = () => {
    const [index1, setIndex1] = useState(0); // State for travel images
    const [index2, setIndex2] = useState(0); // State for reminder images

    const travelimages = [travel1, travel2];
    const reminders = [reminder1, reminder2, reminder3, reminder4, reminder5, reminder6, reminder7];

    const length1 = travelimages.length;
    const length2 = reminders.length;

    const handlePrevious1 = () => {
        const newIndex = index1 === 0 ? length1 - 1 : index1 - 1;
        setIndex1(newIndex);
    };

    const handleNext1 = () => {
        const newIndex = index1 === length1 - 1 ? 0 : index1 + 1;
        setIndex1(newIndex);
    };

    const handlePrevious2 = () => {
        const newIndex = index2 === 0 ? length2 - 1 : index2 - 1;
        setIndex2(newIndex);
    };

    const handleNext2 = () => {
        const newIndex = index2 === length2 - 1 ? 0 : index2 + 1;
        setIndex2(newIndex);
    };

    return (
        <>
            {/* Travel Carousel */}
            <div className="carousel-container">
                {/* Left arrow div */}
                <div className="arrow arrow-left" onClick={handlePrevious1}></div>

                <div className="carousel-items-wrapper" style={{ transform: `translateX(-${index1 * 100}%)` }}>
                    <div className="carousel-item">
                        <img className="travel-tip" src={travelimages[0]} alt="travel tip 1" />
                    </div>
                    <div className="carousel-item">
                        <img className="travel-tip" src={travelimages[1]} alt="travel tip 2" />
                    </div>
                </div>

                {/* Right arrow div */}
                <div className="arrow arrow-right" onClick={handleNext1}></div>
            </div>
            <br/>
            {/* Reminder Carousel */}
            <div className="carousel-container">
                {/* Left arrow div */}
                <div className="arrow arrow-left" onClick={handlePrevious2}></div>

                <div className="carousel-items-wrapper" style={{ transform: `translateX(-${index2 * 100}%)` }}>
                    {reminders.map((image, idx) => (
                        <div key={idx} className="carousel-item">
                            <img className="travel-tip" src={image} alt={`reminder tip ${idx + 1}`} />
                        </div>
                    ))}
                </div>

                {/* Right arrow div */}
                <div className="arrow arrow-right" onClick={handleNext2}></div>
            </div>
        </>
    );
};

export default Carousels;
