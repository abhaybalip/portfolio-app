
import '../Asset/css-file/Education.css'

const EduIcon = require('../Asset/img-file/Head-Icon/Edu-Icon.jpg')

export function Education() {
    return (
        <div id='edu-body'>
            <h3 style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    
                    padding: '1rem'
                }}>
                <img src={EduIcon} alt='Edu-icon' style={{
                    height: '2.5rem',
                    width: '2.5rem',
                    borderRadius: '1rem',
                    marginRight: '0.5rem'
                }}></img>
                <p>
                    My-Education Details
                </p>
            </h3>
            <pre>
                <ul>
                    <li>B.E. CSE
                        @MumbaiUniversity - BVCOENM
                    </li>
                    <li>
                        93.7% MHT-CET 2021
                    </li>
                    <li>
                        86.33% HSC - MaharashtraStateBoard
                        KBP College Vashi
                    </li>
                    <li>
                        85.20% SSC - MaharashtraStateBoard
                        KVM.D Mumbai
                    </li>
                </ul>
            </pre>
        </div>
    )
}
