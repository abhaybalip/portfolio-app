
import '../Asset/CSS-Files/Contact.css';

const ContactIcon = require('../Asset/Image/Icon/ContactIcon.png'),
    PhoneIcon = require('../Asset/Image/ContactIcon/PhoneIcon.png'),
    EmailIcon = require('../Asset/Image/ContactIcon/EmailIcon.png'),
    GithubIcon = require('../Asset/Image/ContactIcon/GithubIcon.png'),
    LinkedinIcon = require('../Asset/Image/ContactIcon/LinkedIcon.png')

function Contact() {
    return (
        <div id='contact' className="contact">
            <div className='contact-header'>
                <img className='contact-icon' src={ContactIcon}></img>
                <div className='contact-title'>
                    Contact Link
                </div>
            </div>

            <div className='contact-body'>

                <a className='contact-link'>
                    <img className='contact-link-icon' src={PhoneIcon}></img>
                </a>

                <a className='contact-link'>
                    <img className='contact-link-icon' src={EmailIcon}></img>
                </a>

                <a className='contact-link'>
                    <img className='contact-link-icon' src={GithubIcon}></img>
                </a>

                <a className='contact-link'>
                    <img className='contact-link-icon' src={LinkedinIcon}></img>
                </a>

            </div>
        </div>
    )
} export default Contact;


