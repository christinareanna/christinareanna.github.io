import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Layout from './Layout';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    // const PageNotFound = () => (
    //     <div>404 not found.</div>
    // )



    return (
        <>
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <h1>home stuff here</h1>
            <hr style={{border: "none"}}/>
            {/* <Navbar toggle={toggle} /> */}
        </>
    )
}

export default Home;
