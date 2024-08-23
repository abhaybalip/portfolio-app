
import Image from 'next/image';
import '../Asset/CSS-Files/About.css';

const AboutIcon = require('../Asset/Image/Icon/AboutIcon.png'),
    UserImg = require('../Asset/Image/UserImg.png')

function About() {
    return (
        <div id='about' className="about">
            <div className='about-header'>
                {/* <img className='about-icon' src={AboutIcon}></img> */}
                <Image className='about-icon' width={0} height={0} src={AboutIcon.default} alt='UserImg'></Image>
                <div className='about-title'>
                    About Me
                </div>
            </div>

            <div className='about-body'>
                {/* <img className='user-img' alt='UserImg' src={UserImg}></img> */}
                <Image className='user-img' width={0} height={0} src={UserImg.default} alt='UserImg'></Image>
                <div className='about-info'>
                    Hello this is Abhay,<br />
                    I'm a Software engineer on a mission to craft<br />
                    software and tools that are both innovative and user-friendly.<br />
                </div>
            </div>
        </div>
    )
}
export default About;
