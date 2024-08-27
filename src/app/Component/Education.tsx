
import Image from 'next/image';

import '../Asset/CSS-Files/Education.css';

const EducationIcon = require('../Asset/Image/Icon/EducationIcon.png')

function Education() {
    return (
        <div id='edu' className="edu">
            <div className="edu-header">
                {/* <img className="edu-icon" alt="edu-icon" src={EducationIcon}></img> */}
                <Image className='edu-icon' src={EducationIcon.default} alt='edu-icon' height={0} width={0}></Image>
                <div className='edu-title'>Education Details</div>
            </div>
            <div className='edu-body'>

                <div className='ver-line'>
                </div>


                <div className='list-box'>

                    <div className='list-line-l'>
                        BE. ComputerEngineering GPA - 8.3 <br />
                        MumbaiUniversity - BVCOENM | 2021-25                    </div>

                    <div className='list-line-r'>
                        MHT-CET - Engg Entrance Exam 93.7 {'(PCM)'}
                    </div>

                    <div className='list-line-l'>
                        HSC - Maharashtra State Board 86.33% {'(Science)'} <br />
                        KBP. College Vashi,Mumbai | 2019-21                    </div>

                    <div className='list-line-r'>
                        SSC - Maharashtra State Board 85.20% <br />
                        Kumud Vidyamandir Deonar, Mumbai | 2019                    </div>
                </div>
            </div>
        </div>
    )
} export default Education;


{/* <div className='list-item'>
<div className='dot'>&bull;</div>
<div>
    BE. ComputerEngineering GPA - 8.3 <br />
    MumbaiUniversity - BVCOENM | 2021-25
</div>
</div>

<div className='list-item'>
<div className='dot'>&bull;</div>
<div>
    MHT-CET - Engg Entrance Exam 93.779 {'(PCM)'}
</div>

</div>

<div className='list-item'>
<div className='dot'>&bull;</div>
<div>
    HSC - Maharashtra State Board 86.33% {'(Science)'} <br />
    KBP. College Vashi,Mumbai | 2019-21
</div>

</div>

<div className='list-item'>

<div className='dot'>&bull;</div>
<div>
    SSC - Maharashtra State Board 85.20% <br />
    Kumud Vidyamandir Deonar, Mumbai | 2019
</div>

</div> */}
