'use client';

import AppLayout from '../asset/AppLayout'
import { skillSet } from '../asset/AppData';

import '../asset/Style/Skillset.css'

const skillset_page = () => {
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
    return AppLayout({ main: skillset_page })
}

export default page
