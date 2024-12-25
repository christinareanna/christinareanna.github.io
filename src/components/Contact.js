import React from "react";
import ContactForm from "./ContactForm";
import Sidebar from "./Sidebar";
import "./ContactForm.css"
import "../App.css";
// import Navbar from "../components/Navbar";

const Contact = ({ isOpen, toggle }) => {
    return (
        <div className="container-fluid">
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            <h1 className="heading">Contact</h1>
            <ContactForm />
        </div>
    )

};

export default Contact;