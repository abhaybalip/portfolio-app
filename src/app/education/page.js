'use client';

import AppLayout from '../Asset/AppLayout';

import { educationData } from '../Asset/AppData.js';

import '../Asset/Style/Education.css';

const EducationPage = () => {
    return (
        <div className="app-main-edu">
            <div className="edu-panel">
                {educationData.map((item, index) => (
                    <div className="edu-p" key={index}>
                        <div className="edu-p-txt">
                            <h4 className="p-txt-title">{item.title}</h4>
                            <div className="p-txt-desc">{item.description}</div>
                            <div className="p-txt-det">{item.details}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function page() {
    return AppLayout({ main: EducationPage })
}

export default page;
