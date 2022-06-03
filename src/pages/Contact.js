import React from "react";
import ContactForm from "../components/ContactForm"
import Sidebar from "../components/Sidebar";
const Contact = ({ isOpen, toggle }) => {
    return (
        <>
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <h3 className="contact">Contact</h3>
            <hr style={{ border: "none" }} />
            <ContactForm />
        </>
    )

};

export default Contact;