'use client';

import AppLayout from './Asset/AppLayout';

import './Asset/Style/About.css'

import ProfileImg from './Asset/Image/About/ProfileImg.jpg'
// import Image from "next/image";

const about_page = () => {
  return (
    <>
      <div className="app-main-abt">
        {/* Profile Image */}
        <img src={ProfileImg.src} alt="Profile Picture" className="abt-img1" />

        {/* Introduction Text */}
        <div className="abt-txt1">
          <h3>Hi 👋, I&apos;m AbhayBalip</h3>
          <p>
            Welcome to my portfolio! I&apos;m a passionate <strong>ComputerEngineer</strong>
            with experience in <strong>Developement</strong>. I love building creative and
            efficient solutions that make a difference.
          </p>
          <p>
            Feel free to explore my work, projects, and journey. Let&apos;s connect
            and create something amazing together! 🚀
          </p>
        </div>
      </div>
    </>
  )
}


function page(){
  return AppLayout({ main: about_page })
}
export default page;
