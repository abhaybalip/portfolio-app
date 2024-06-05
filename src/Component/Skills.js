
import '../Asset/css-file/Skills.css'

export function Skills() {
    return (
        <div id='skill-body'>
            <h3 style={{
                margin: '1rem 0 0 0',
                backgroundColor: '#414141',
                border: '1px solid #e0e0e0',
                color: '#FFFFFF',
                padding: '01rem',
                borderRadius: '1rem'
            }}>
                My-Skill sets
            </h3>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: "space-evenly",

                fontSize: 'large'
            }}>
                <ul style={{
                    margin: '0rem 5rem 0rem 0rem',
                    padding: '0.5rem',
                }}>

                    <li>Skill 1</li>

                </ul>

                <ul style={{
                    margin: '0rem 0rem 0rem 5rem',
                    padding: '0.5rem',
                }}>
                    <li>Skill 2</li>

                </ul>
            </div>
        </div>
    )
}