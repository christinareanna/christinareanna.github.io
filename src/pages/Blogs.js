import React from 'react';
import Sidebar from '../components/Sidebar';

const Blogs = ({isOpen, toggle}) => {
    return (
        <>
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>

            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
            <h1 style={{ color: "white" }}>There will be blogs here of things and stuff!</h1>
        </>
    );
};

export default Blogs;