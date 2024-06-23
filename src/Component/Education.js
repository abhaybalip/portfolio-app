
import '../Asset/CSS-Files/Education.css';

const EducationIcon = require('../Asset/Image/Icon/EducationIcon.png')

function Education() {
    return (
        <div id='edu' className="edu">
            <div className="edu-header">
                <img className="edu-icon" alt="edu-icon" src={EducationIcon}></img>
                <div className='edu-title'>Education Details</div>
            </div>
            <div className='edu-body'>
                <div className='edu-list'>
                    <div className='list-item'>
                        <div className='dot'>&bull;</div>
                        <div>
                            BE. ComputerEngineering GPA - 8.384 <br />
                            MumbaiUniversity - BVCOENM
                        </div>
                    </div>

                    <div className='list-item'>
                        <div className='dot'>&bull;</div>
                        <div>
                            MHT-CET - Entrance Exam 93.779 {'(PCM)'}
                        </div>

                    </div>

                    <div className='list-item'>
                        <div className='dot'>&bull;</div>
                        <div>
                            HSC - Maharashtra State Board 86.33% {'(Science)'} <br />
                            KBP.College
                        </div>

                    </div>

                    <div className='list-item'>

                        <div className='dot'>&bull;</div>
                        <div>
                            SSC - Maharashtra State Board 85.20% <br />
                            Kumud Vidyamandir Deonar, Mumbai
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
} export default Education;
