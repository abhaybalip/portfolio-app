'use client';

import AppLayout from '../Asset/AppLayout'

import { contactLink } from '../Asset/AppData';

import '../Asset/Style/Contact.css'

const ContactPage = () => {
    return (
        <div className="app-main-con">
            <h2 className="con-title">Get in Touch</h2>
            <p className="con-text">Feel free to connect with me on the platforms below:</p>

            <div className="con-links">
                {
                    contactLink.map((item, index) => (
                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="con-link">
                            {item.icon} {item.name}</a>
                    ))
                }
            </div>
        </div>
    )
}

function Page() {
    return AppLayout({ main: ContactPage })
}

export default Page
