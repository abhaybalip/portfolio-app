'use client';

import AppLayout from '../asset/AppLayout';

import { educationData } from '../asset/AppData';

import '../asset/Style/Education.css';

const educationPage = () => {
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
    return AppLayout({ main: educationPage })
}

export default page;
