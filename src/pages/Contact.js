import React from "react";
import ContactForm from "../components/ContactForm"
import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
const Contact = ({ isOpen, toggle }) => {
    return (
        <>
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <h1 className="heading">Contact</h1>
            <ContactForm />
        </>
    )

};

export default Contact;