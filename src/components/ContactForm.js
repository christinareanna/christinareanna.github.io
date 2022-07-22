import React from 'react';
import {Link} from 'react-router-dom';
import "./ContactForm.css";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mbjweayv");
    if (state.succeeded) {
        return (
            <>
                <p id="sent-message">Thanks for messaging! I'll get back to you shortly!</p>
                <Link to="/"><button className="button">Go Home</button></Link>
            </>
        )
    }


    // idk why this didn't work when i tested it so come back and figure it out
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
                        name='from_name'
                        placeholder='Required'
                        required
                        style={{ height: "5em", backgroundColor: "black" }}
                    />
                    <br />
                    <input
                        type='text'
                        name='to_name'
                        placeholder='Required'
                        required
                        style={{ height: "5em", backgroundColor: "black" }}
                    />
                    <br />
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Required'
                        required
                        style={{ height: "5em", backgroundColor: "black" }}
                    />
                    <br />
                    <textarea
                        type='text'
                        name='message'
                        required
                        style={{ height: "5em", resize: "none", fontFamily: "calibri", backgroundColor: "black" }}
                    />
                    <br />
                    <button className="button" type='submit' disabled={state.submitting}>Submit</button>
                    {/* <button className="button" type='submit' disabled={state.submitting}>Cancel</button> */}
                </form>
            </div>
        </>
    )
}
export default ContactForm;