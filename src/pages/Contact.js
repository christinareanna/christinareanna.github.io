import React from "react";
import ContactForm from "../components/ContactForm"
import Sidebar from "../components/Sidebar";
const Contact = ({isOpen, toggle}) => {
    return (
        <>
        <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
        <ContactForm />
        </>
    )

};

export default Contact;