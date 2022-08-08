import React from "react";
import ContactForm from "../components/ContactForm"
import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
const Contact = ({ isOpen, toggle }) => {
    return (
        <>
            {/* <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div> */}
            {/* <Navbar />
            <h3 className="contact">Contact</h3>
            <hr style={{ border: "none" }} />
            <ContactForm /> */}
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <h1 className="contact">Contact</h1>
            <hr style={{ border: "none" }} />
            <ContactForm />
        </>
    )

};

export default Contact;