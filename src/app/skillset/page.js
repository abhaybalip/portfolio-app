'use client';

import AppLayout from '../Asset/AppLayout'
import { skillSet } from '../Asset/AppData';

import '../Asset/Style/Skillset.css'

const SkillsetPage = () => {
    return (
        <>
            <div className="app-main-skl">
                {
                    skillSet.map((skill, index) => {
                        return (
                            <div className='skl-panel' key={index}>
                                <div className='panel-title'>
                                    {skill.title}
                                </div>

                                <div className='panel-list'>
                                    {
                                        skill.list.map((item, index) => {
                                            return (
                                                <div className='panel-li' key={index}>{item}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

function page() {
    return AppLayout({ main: SkillsetPage })
}

export default page
