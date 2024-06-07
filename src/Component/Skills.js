import '../Asset/css-file/Skills.css' // Assuming CSS file exists

const SkillIcon = require('../Asset/img-file/Head-Icon/Skill-Icon.jpg')

const ProgrammingIcon = require('../Asset/img-file/Skill-Image/Programming-Icon.jpg')
const DBIcon = require('../Asset/img-file/Skill-Image/DB-Icon.jpg')
const FrameworkIcon = require('../Asset/img-file/Skill-Image/Framework-Icon.jpg')
const DevToolIcon = require('../Asset/img-file/Skill-Image/DevTool-Icon.jpg')

function SkillLine_Maker(skillImg, skillName, skillList) {
    return (
        <tr style={{
            padding: '0.5rem'
        }}>
            <td className="skill-icon-cell">
                <img id="skill-icon" src={skillImg} alt={skillName} />
            </td>
            <td className="skill-name-cell">
                <strong>{skillName}</strong>
            </td>
            <td style={{
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
            }}>
                :
            </td>
            <td className="skill-list-cell">{skillList}</td>
        </tr>
    )
}

export function Skills() {
    return (
        <div id="skill-body">
            <h3 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: '1rem' }}>
                <img src={SkillIcon} alt="Skill-Icon" style={{
                    height: '2.5rem',
                    width: '2.5rem',
                    borderRadius: '1rem',
                    marginRight: '0.5rem'
                }} />
                <div>My-Skill sets</div>
            </h3>

            <table style={{
                padding: '1rem'
            }}>
                <tbody>
                    {SkillLine_Maker(ProgrammingIcon, ' Programming Language ', ['C/Cpp , Java , JavaScript , Python , Dart //'])}
                    {SkillLine_Maker(DBIcon, ' DataBase', 'SQL , NoSql //')}
                    {SkillLine_Maker(FrameworkIcon, ' Frameworks ', 'Web-Dev , Node.js , Flask , Flutter //')}
                    {SkillLine_Maker(DevToolIcon, ' Dev-Tools ', 'Git/GitHub , Postman , Docker //')}
                </tbody>
            </table>
        </div>
    )
}
