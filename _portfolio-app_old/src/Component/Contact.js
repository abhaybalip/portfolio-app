
import '../Asset/CSS-Files/Contact.css';

const ContactIcon = require('../Asset/Image/Icon/ContactIcon.png');

const Icon = {
    PhoneIcon: require('../Asset/Image/ContactIcon/PhoneIcon.png'),
    EmailIcon: require('../Asset/Image/ContactIcon/EmailIcon.png'),
    GithubIcon: require('../Asset/Image/ContactIcon/GithubIcon.png'),
    LinkedinIcon: require('../Asset/Image/ContactIcon/LinkedIcon.png'),
    InstaIcon: require('../Asset/Image/ContactIcon/InstaIcon.png'),
    HackerrankIcon: require('../Asset/Image/ContactIcon/HackerrankIcon.png'),
}

const Link = {
    phone: 'tel: 00000 00000',
    mail: 'mailto: mymail@gmail.com',
    github: 'https://www.github.com/abhaybalip/',
    hackerrank: 'https://www.hackerrank.com/abhaybalip/',
    linkedin: 'https://www.linkedin.com/in/abhaybalip/',
    instagram: 'https://www.instagram.com/abhaybalip/',
}

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

                <a target="_blank" href={Link.phone} className='contact-link'>
                    <img className='contact-link-icon' src={Icon.PhoneIcon}></img>
                </a>

                <a target="_blank" href={Link.mail} className='contact-link'>
                    <img className='contact-link-icon' src={Icon.EmailIcon}></img>
                </a>

                <a target="_blank" href={Link.github} className='contact-link'>
                    <img className='contact-link-icon' src={Icon.GithubIcon}></img>
                </a>

                <a target="_blank" href={Link.hackerrank} className='contact-link'>
                    <img className='contact-link-icon' src={Icon.HackerrankIcon}></img>
                </a>

                <a target="_blank" href={Link.linkedin} className='contact-link'>
                    <img className='contact-link-icon' src={Icon.LinkedinIcon}></img>
                </a>

                <a target="_blank" href={Link.instagram} className='contact-link'>
                    <img className='contact-link-icon' src={Icon.InstaIcon}></img>
                </a>

            </div>
        </div>
    )
} export default Contact;
