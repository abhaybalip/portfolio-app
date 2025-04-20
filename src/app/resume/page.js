'use client';

import React from "react";

import AppLayout from "../Asset/AppLayout";

import '../Asset/Style/Resume.css';

import { ResumeLink } from "../Asset/AppData";

const ResumePage = () => {
    return (
        <div className="app-main-res">
            <div className="resume-container">
                <iframe
                    src={ResumeLink}
                    className="resume-iframe"
                    title="Resume"
                ></iframe>
            </div>
        </div>
    );
};

function page() {
    return AppLayout({ main: ResumePage })
}

export default page;
