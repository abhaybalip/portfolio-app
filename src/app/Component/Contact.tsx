
import Image from 'next/image';

import '../Asset/CSS-Files/Contact.css';

const ContactIcon = require('../Asset/Image/Icon/ContactIcon.png');


const ContactInfo = [
    { name: 'Phone', icon: require('../Asset/Image/ContactIcon/PhoneIcon.png'), link: 'tel: 00000 00000' },
    { name: 'Email', icon: require('../Asset/Image/ContactIcon/EmailIcon.png'), link: 'mailto: mymail@gmail.com' },
    { name: 'GitHub', icon: require('../Asset/Image/ContactIcon/GithubIcon.png'), link: 'https://www.github.com/abhaybalip/' },
    { name: 'Linkedin', icon: require('../Asset/Image/ContactIcon/LinkedIcon.png'), link: 'https://www.linkedin.com/in/abhaybalip/' },
    { name: 'HackerRank', icon: require('../Asset/Image/ContactIcon/HackerrankIcon.png'), link: 'https://www.hackerrank.com/abhaybalip/' },
    { name: 'Instagram', icon: require('../Asset/Image/ContactIcon/InstaIcon.png'), link: 'https://www.instagram.com/abhaybalip/' },
]


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

                {/* <a target="_blank" href={Link.phone} className='contact-link'>
                    <Image className='contact-link-icon' src={Icon.PhoneIcon.default} alt='contact-link-iocn'></Image>
                </a> */}

                {ContactInfo.map((value) => {
                    return (
                        <a target='_blank' className='contact-link' href={value.link}>
                            <Image src={value.icon} alt={value.name} className='contact-link-icon'></Image>
                        </a>
                    )
                })}

            </div>
        </div>
    )
} export default Contact;
