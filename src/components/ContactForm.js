import { useState } from 'react';
import { send } from 'emailjs-com';
import "./ContactForm.css";
// import Navbar from './Navbar';

function ContactForm() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });
    

    function refreshPage() {
        window.location.reload(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_rc4kzxr',
            'template_og474ne',
            toSend,
            'user_wUz7J2jzmE2TlAVKfiEz5'
        )
            .then((response) => {
                console.log('Success!', response.status, response.text);
                alert('Thank you for your message! I will be in touch as soon as possible.')
            })
            .catch((err) => {
                console.log('Failed.', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };



    return (
        <>
        {/* <Navbar/> */}
            <div className='contact-form'>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Your name'
                        value={toSend.from_name}
                        onChange={handleChange}
                        required
                        style={{ height: "5em", backgroundColor: "black" }}
                    />
                    <br />
                    <input
                        type='text'
                        name='to_name'
                        placeholder='Subject'
                        value={toSend.to_name}
                        onChange={handleChange}
                        required
                        style={{ height: "5em", backgroundColor: "black" }}
                    />
                    <br />
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                        required
                        style={{ height: "5em", backgroundColor: "black" }}
                    />
                    <br />
                    <textarea
                        type='text'
                        name='message'
                        placeholder='Message'
                        value={toSend.message}
                        onChange={handleChange}
                        required
                        style={{ height: "5em", resize: "none", fontFamily: "calibri", backgroundColor: "black" }}
                    />
                    <br />
                    <button className="button" onClick={refreshPage}>Reload</button>
                    <button className="button" type='submit' onClick={onSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}
export default ContactForm;