
import Image from 'next/image';

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
                {/* <img className='contact-icon' src={ContactIcon}></img> */}
                <Image className='contact-icon' src={ContactIcon.default} alt='contact-icon'></Image>
                <div className='contact-title'>
                    Contact Link
                </div>
            </div>

            <div className='contact-body'>

                <a target="_blank" href={Link.phone} className='contact-link'>
                    {/* <img className='contact-link-icon' src={Icon.PhoneIcon}></img> */}
                    <Image className='contact-link-icon' src={Icon.PhoneIcon.default} alt='contact-link-iocn'></Image>
                </a>

                <a target="_blank" href={Link.mail} className='contact-link'>
                    {/* <img className='contact-link-icon' src={Icon.EmailIcon}></img> */}
                    <Image className='contact-link-icon' src={Icon.EmailIcon.default} alt='contact-link-iocn'></Image>
                </a>

                <a target="_blank" href={Link.github} className='contact-link'>
                    {/* <img className='contact-link-icon' src={Icon.GithubIcon}></img> */}
                    <Image className='contact-link-icon' src={Icon.GithubIcon.default} alt='contact-link-iocn'></Image>
                </a>

                <a target="_blank" href={Link.hackerrank} className='contact-link'>
                    {/* <img className='contact-link-icon' src={Icon.HackerrankIcon}></img> */}
                    <Image className='contact-link-icon' src={Icon.HackerrankIcon.default} alt='contact-link-iocn'></Image>
                </a>

                <a target="_blank" href={Link.linkedin} className='contact-link'>
                    {/* <img className='contact-link-icon' src={Icon.LinkedinIcon}></img> */}
                    <Image className='contact-link-icon' src={Icon.LinkedinIcon.default} alt='contact-link-iocn'></Image>
                </a>

                <a target="_blank" href={Link.instagram} className='contact-link'>
                    {/* <img className='contact-link-icon' src={Icon.InstaIcon}></img> */}
                    <Image className='contact-link-icon' src={Icon.InstaIcon.default} alt='contact-link-iocn'></Image>
                </a>

            </div>
        </div>
    )
} export default Contact;
