'use client';

import AppLayout from '../asset/AppLayout'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

import '../asset/Style/Contact.css'

const conPage = () => {
    return (
        <div className="app-main-con">
            <h2 className="con-title">Get in Touch</h2>
            <p className="con-text">Feel free to connect with me on the platforms below:</p>

            <div className="con-links">
                <a href="https://github.com/abhaybalip/" target="_blank" rel="noopener noreferrer" className="con-link">
                    <FaGithub /> GitHub
                </a>
                <a href="https://linkedin.com/in/abhaybalip/" target="_blank" rel="noopener noreferrer" className="con-link">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://twitter.com/abhaybalip/" target="_blank" rel="noopener noreferrer" className="con-link">
                    <FaTwitter /> Twitter
                </a>
                <a href="mailto:abhay.balip01@gmail.com" className="con-link">
                    <FaEnvelope /> Email Me
                </a>
            </div>
        </div>
    )
}

function Page() {
    return AppLayout({ main: conPage() })
}

export default Page
