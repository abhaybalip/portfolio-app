
import '../Asset/css-file/Experience.css'

const ExpIcon = require('../Asset/img-file/Head-Icon/Exp-Icon.jpg')

export function Experience() {
    return (
        <div id="exp-body">
            <h3 style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    
                    padding: '1rem'
                }}>
                <img src={ExpIcon} alt='Exp-Iocn' style={{
                    height: '2.5rem',
                    width: '2.5rem',
                    borderRadius: '1rem',
                    marginRight: '0.5rem'
                }}></img>
                <p>
                My-Experience Information
                </p>
            </h3>

            <p>
                <ul>
                    <li>
                        College Experiece
                    </li>
                    <li>
                        School Experiece
                    </li>
                </ul>
            </p>
        </div>
    )
}
