
import Image from 'next/image';

import '../Asset/CSS-Files/Skillset.css';

const SkillIcon = require('../Asset/Image/Icon/SkillIcon.png')

const Icon = {
    LanguageIcon: require('../Asset/Image/SkillIcon/LanguageIcon.png'),
    FrameworkIcon: require('../Asset/Image/SkillIcon/FrameworkIcon.png'),
    DatabaseIcon: require('../Asset/Image/SkillIcon/DatabaseIcon.png'),
    DevToolsIcon: require('../Asset/Image/SkillIcon/DevToolsIcon.png'),
}

function Skill() {
    return (
        <div id='skill' className="skill">
            <div className='skill-header'>
                {/* <img className='skill-icon' src={SkillIcon}></img> */}
                <Image className='skill-icon' src={SkillIcon.default} alt='skill-icon'></Image>
                <div className='skill-title'>
                    My Skill sets
                </div>
            </div>

            <table className="skill-body">
                <tbody>

                    <tr>
                        <td className="skill-list-item">
                            {/* <img className="list-item-icon" src={Icon.LanguageIcon}></img> */}
                            <Image className="list-item-icon" src={Icon.LanguageIcon.default} alt='list-item-icon'></Image>
                        </td>
                        <td>
                            <div className="list-box">C/Cpp , Java , Python , Dart , TypeScript </div>
                        </td>
                    </tr>

                    <tr>
                        <td className="skill-list-item">
                            {/* <img className="list-item-icon" src={Icon.FrameworkIcon}></img> */}
                            <Image className="list-item-icon" src={Icon.FrameworkIcon.default} alt='list-item-icon'></Image>
                        </td>
                        <td>
                            <div className="list-box">Web-Dev , Node.js , Flutter-Dart , Flask-Python , Java Spring-Boot (Beginner) </div>
                        </td>
                    </tr>

                    <tr>
                        <td className="skill-list-item">
                            {/* <img className="list-item-icon" src={Icon.DatabaseIcon}></img> */}
                            <Image className="list-item-icon" src={Icon.DatabaseIcon.default} alt='list-item-icon'></Image>
                        </td>
                        <td>
                            <div className="list-box">Relational DB - MySQL (or similar) , NoSQL - MongoDB</div>
                        </td>
                    </tr>

                    <tr>
                        <td className="skill-list-item">
                            {/* <img className="list-item-icon" src={Icon.DevToolsIcon}></img> */}
                            <Image className="list-item-icon" src={Icon.DevToolsIcon.default} alt='list-item-icon'></Image>
                        </td>
                        <td>
                            <div className="list-box">Git/GitHub , Figma , Docker , MS Azure (Basics)</div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
} export default Skill;
