'use client';

import AppLayout from '../asset/AppLayout'

import '../asset/Style/Skillset.css'

const skillset_page = () => {
    return (
        <>
            <div className="app-main-skl">

                <h2 className="skl-title">Under Construction</h2>
                
            </div>
        </>
    )
}

function page() {
    return AppLayout({ main: skillset_page() })
}

export default page
