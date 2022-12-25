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
            <h1 className='blogs'>Blogs</h1>
            <hr style={{ border: "none" }} />

            <div className='global-container'>
                <h1 className='global-title'>Six Months</h1>
                <p className='global'>I'll hit 6 months sober on 1/5/2023. This year is my first sober Christmas and I'm drinking Athletic Brewing Co. Run Wild IPA with my sister and her boyfriend who are also sober.
                It's nice to be in an environment where I'm not the only sober person.'</p>
            </div>  

            <hr style={{ border: "none" }} />

            <div className='global-container'>
                <h1 className='global-title'>The Big 100</h1>
                <p className='global'>I hit the big 100 today! It feels incredible to wake up refreshed and full of energy. I've even met a lot 
                of other people in the sober community and they are awesome. Sobriety has become my new normal and I'm happy to say that
                I'm seeing only improvements in myself now.</p>
            </div>
            <hr style={{ border: "none" }} />

            <div className='global-container'>
                <h1 className='global-title'>Two Months Sober</h1>
                <p className='global'>Today is Labor Day and I'm still choosing sobriety at the BBQ today! It's been a relatively smooth
                sailing process. The thing with being sober from alcohol and stopping smoking cigarettes at the same time is
                trying to find ways to deal with stress. My focus has become exercising and eating healthy and that has been helping a lot. Allowing myself 
                the ability to rest is also crucial in maintaining stress.</p>
            </div>
            <hr style={{ border: "none" }} />

            <div className='global-container'>
                <h1 className='global-title'>One Month Sober</h1>
                <p className='global'>I chose sobriety on 7/5/2022. I was tired of the partying, feeling exhausted, and not focusing
                on my self care enough. It's incredible how much money I'm saving and how much energy I have now. I'll be back to update
                when I hit my next milestone!</p>
            </div>
            <hr style={{ border: "none" }} />

            <div className='global-container'>
                <h1 className='global-title'>My First Blog</h1>
                <p className='global'>Hello! I hope you are doing well. I'm really proud of what
                I have been creating lately. I am learning a lot about CSS that I never knew before. I feel like I'm 
                getting better at it, but I still don't know how to do a lot of the fancier stuff. 
                The most difficult part for me is the responsiveness. I have a habit of starting from outside in, instead of 
                an inside out approach. I'm doing my best to do a mobile-first approach, but I miss things sometimes. Looking back to when
                I just first began coding, I can see my progress and will continue to keep on that path! Toodles for now.</p>
            </div>
            <hr style={{ border: "none" }} />
        </>
    );
};

export default Blogs;