'use client';

import AppLayout from '../asset/AppLayout'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

import '../asset/Style/Contact.css'

const ContactPage = () => {
    return (
        <div className="app-main-contact">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-text">Feel free to connect with me on the platforms below:</p>

            <div className="contact-links">
                <a href="https://github.com/abhaybalip/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <FaGithub /> GitHub
                </a>
                <a href="https://linkedin.com/in/abhaybalip/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://twitter.com/abhaybalip/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <FaTwitter /> Twitter
                </a>
                <a href="mailto:abhay.balip01@gmail.com" className="contact-link">
                    <FaEnvelope /> Email Me
                </a>
            </div>
        </div>
    )
}

function Page() {
    return AppLayout({ main: ContactPage() })
}

export default Page
