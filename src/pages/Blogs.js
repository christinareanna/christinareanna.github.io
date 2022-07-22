import React from 'react';
import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar';

// this will be automated so i don't have to type it in here every dang time :-)
const Blogs = ({ isOpen, toggle }) => {
    return (
        <>
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            {/* <Navbar /> */}
            <h3 className='blogs'>Blogs</h3>
            <hr style={{ border: "none" }} />
            <div className='blog-container'>
                <p className='blog-title'><i>How I made my site - 06/03/22</i></p>
                <p className='blog'>Hi there. Welcome to my personal page!
                    This is my first blog post, so I'd like to explain how I've created this site.
                    I use JavaScript, React, and some vanilla HTML/CSS.
                    The background is a particles background and I had a lot of fun editing
                    it to my liking! </p>
                <hr style={{ border: "none" }} />
            </div>
        </>
    );
};

export default Blogs;