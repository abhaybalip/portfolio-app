'use client';

import AppLayout from '../asset/AppLayout';

import '../asset/Style/Education.css'

const education_page = () => {
    return (
        <>
            <div className="app-main-edu">

                <div className="edu-panel">

                    <div className="edu-p">
                        {/* <div className="edu-p-dot"><TbPoint></TbPoint></div> */}
                        <div className="edu-p-txt">
                            <h4 className="p-txt-title">B.E. ComputerEngineering</h4>
                            <div className="p-txt-desc">MumbaiUniversity - BVCOE NaviMumbai</div>
                            <div className="p-txt-det">2021-25 | GPA: 8.2</div>
                        </div>
                    </div>

                    <div className="edu-p">
                        <div className="edu-p-txt">
                            <h4 className="p-txt-title">H.S.C. Science(PCM)</h4>
                            <div className="p-txt-desc">MSBSHSE - K.B.P. College NaviMumbai</div>
                            <div className="p-txt-det">2021 | %: 86.33</div>
                        </div>
                    </div>

                    <div className="edu-p">
                        <div className="edu-p-txt">
                            <h4 className="p-txt-title">S.S.C.</h4>
                            <div className="p-txt-desc">MSBSHSE - Kumud Vidyamandir Mumbai</div>
                            <div className="p-txt-det">2019 | %: 85.20</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
function page() {
    return AppLayout({ main: education_page() })
}
export default page;
