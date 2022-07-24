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
                <p className='blog-title'><i>My First Blog</i></p>
                <p className='blog'>Greetings, earthling. I hope you are doing well. I'm really proud of what
                I have been creating lately. I am learning a lot about CSS that I never knew before. I feel like I'm 
                getting better at it, but I still don't know how to do a lot of the fancier stuff. One day, there will be more than just these three 
                pages. Toodles for now.</p>
            </div>
            <hr style={{ border: "none" }} />
        </>
    );
};

export default Blogs;