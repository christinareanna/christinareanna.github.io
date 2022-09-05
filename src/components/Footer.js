import React from "react";


export const Footer = () => {
    const currentYear = (new Date().getFullYear())
    const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear

    return (
        <footer className="footer">
            © {yearTxt} • Christina Reanna Knapp • All Rights Reserved
        </footer>
    )
}