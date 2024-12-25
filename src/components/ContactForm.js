import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import "./ContactForm.css";
import "../darkMode.css";

function ContactForm() {
    const [state, handleSubmit] = useForm("mbjweayv");
    if (state.succeeded) {
        return (
            <div className='sent'>
                <p className="sent-message" id="sent-message">Thanks for messaging! I'll get back to you shortly!</p>
                <Link to="/"><button className="contact-button">Go Home</button></Link>
            </div>
        )
    }


    return (
        <>
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                    <ValidationError
                        prefix="Email"
                        field="Email"
                        errors={state.errors}
                    />
                    <input
                        type='text'
                        class='input'
                        name='from_name'
                        placeholder='Full Name'
                        required
                        // style={{ height: "5em", backgroundColor: "black" }}
                    />
                    <br />
                    <input
                        type='text'
                        class='input'
                        name='reply_to'
                        placeholder='Your Email'
                        required
                        // style={{ height: "5em", backgroundColor: "black" }}
                    />
                    <br />
                    <textarea
                        type='text'
                        class='input'
                        name='message'
                        placeholder='Message'
                        required
                        // style={{ height: "5em", resize: "none", fontFamily: "arial", backgroundColor: "black" }}
                    />
                    <br />
                    <button className="contact-button" type='submit' disabled={state.submitting}>Submit</button>
                    {/* <Link to="/"><button className="button">Home</button></Link> */}
                    {/* <button className="button" type='submit' disabled={state.submitting}>Cancel</button> */}
                </form>
            </div>
        </>
    )
}
export default ContactForm;