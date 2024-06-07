
import '../Asset/css-file/Skills.css'

const SkillIcon = require('../Asset/img-file/Head-Icon/Skill-Icon.jpg')

const ProgrammingIcon = require('../Asset/img-file/Skill-Image/Programming-Icon.jpg')
const DBIcon = require('../Asset/img-file/Skill-Image/DB-Icon.jpg')


export function Skills() {
    return (
        <div id='skill-body'>

            <h3 style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',

                padding: '1rem'
            }}>
                <img src={SkillIcon} alt='Skill-Icon' style={{
                    height: '2.5rem',
                    width: '2.5rem',
                    borderRadius: '1rem',
                    marginRight: '0.5rem'
                }}></img>
                <p>
                    My-Skill sets
                </p>
            </h3>
            <p style={{

            }}>
                <div id='skill-line'>
                    <img id='skill-icon' src={ProgrammingIcon} alt='Programming-Icon'></img>
                    <div id='skill-name'>
                        Programming Language
                    </div>
                    :
                    <div id='skill-list'>
                        C/Cpp , Java , JavaScript , Python ,  Dart //
                    </div>
                </div>


                <div>
                    <img id='skill-icon' src={DBIcon} alt='Programming-Icon'></img>
                    <div id='skill-name'>
                        Programming Language
                    </div>
                    :
                    <div id='skill-list'>
                        SQL , NoSql //
                    </div>
                </div>
            </p>
        </div>
    )
}
