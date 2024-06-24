
import '../Asset/CSS-Files/Skillset.css';

const SkillIcon = require('../Asset/Image/Icon/SkillIcon.png')

const Icon = {
    LanguageIcon: require('../Asset/Image/SkillIcon/LanguageIcon.png'),
    FrameworkIcon: require('../Asset/Image/SkillIcon/FrameworkIcon.png'),
    DatabaseIcon: require('../Asset/Image/SkillIcon/DatabaseIcon.png'),
    DevToolsIcon: require('../Asset/Image/SkillIcon/DevToolsIcon.png'),
}

function Skillset() {
    return (
        <div id='skill' className="skill">
            <div className='skill-header'>
                <img className='skill-icon' src={SkillIcon}></img>
                <div className='skill-title'>
                    My Skill sets
                </div>
            </div>

            <table class="skill-body">
                <tbody>

                    <tr>
                        <td class="skill-list-item">
                            <img class="list-item-icon" src={Icon.LanguageIcon}></img>
                        </td>
                        <td>
                            <div class="list-box">C/Cpp, Java, JavaScript, Python, Dart</div>
                        </td>
                    </tr>

                    <tr>
                        <td class="skill-list-item">
                            <img class="list-item-icon" src={Icon.FrameworkIcon}></img>
                        </td>
                        <td>
                            <div class="list-box">Node.js, Flutter, Flask</div>
                        </td>
                    </tr>

                    <tr>
                        <td class="skill-list-item">
                            <img class="list-item-icon" src={Icon.DatabaseIcon}></img>
                        </td>
                        <td>
                            <div class="list-box">SQL - MySQL, NoSQL - MongoDB</div>
                        </td>
                    </tr>

                    <tr>
                        <td class="skill-list-item">
                            <img class="list-item-icon" src={Icon.DevToolsIcon}></img>
                        </td>
                        <td>
                            <div class="list-box">Git/GitHub, Docker, Postman</div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
} export default Skillset;
