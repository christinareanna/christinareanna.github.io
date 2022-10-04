import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';



export const Footer = () => {
    const currentYear = (new Date().getFullYear())
    const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear

    return (
        <footer className="footer">
            <div className='row'>
                <div className='col'>
                    <a href='https://github.com/christinareanna' rel='noreferrer' target='_blank' aria-label='Github'><AiOutlineGithub className="footer-icon"/></a>
                    <a href='https://www.linkedin.com/in/christinareannaknapp/' rel='noreferrer' target='_blank' aria-label='LinkedIn'><AiFillLinkedin className="footer-icon"/></a>
                </div>
            </div>
            © {yearTxt} • Christina Reanna Knapp • All Rights Reserved
        </footer>
    )
}