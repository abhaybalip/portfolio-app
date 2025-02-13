'use client';

import AppLayout from "../asset/AppLayout";

const education_page = () => {
    return (
        <>
            <div className="app-main-edu">
                Education-page
            </div>
        </>
    )
}
function page() {
    return AppLayout({main: education_page()})
}
export default page;
