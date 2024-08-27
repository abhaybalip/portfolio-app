
import Image from 'next/image';

import '../Asset/CSS-Files/Experience.css'

const ExperienceIcon = require('../Asset/Image/Icon/EducationIcon.png')

function Experience(params) {
    return (
        <div id="exp">
            <div className="exp-header">
                {/* <img className="edu-icon" alt="edu-icon" src={EducationIcon}></img> */}
                <Image className='exp-icon' src={ExperienceIcon.default} alt='edu-icon' height={0} width={0}></Image>
                <div className='exp-title'>Education Details</div>
            </div>

            <div className='exp-body'></div>
        </div>
    )
}
export default Experience;
