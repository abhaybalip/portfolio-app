'use client';

import Image from "next/image";
import AppLayout from "./asset/AppLayout";

import './globals.css'
import './asset/Style/About.css'

import ProfileImg from './asset/Image/About/ProfileImg.jpg'

const about_page = () => {
  return (
    <>
      <div className="app-main-abt">
        {/* Profile Image */}
        <img src={ProfileImg.src} alt="Profile Picture" className="abt-img1" />

        {/* Introduction Text */}
        <div className="abt-txt1">
          <h3>Hi 👋, I'm AbhayBalip</h3>
          <p>
            Welcome to my portfolio! I'm a passionate <strong>ComputerEngineer</strong>
            with experience in <strong>Developement</strong>. I love building creative and
            efficient solutions that make a difference.
          </p>
          <p>
            Feel free to explore my work, projects, and journey. Let's connect
            and create something amazing together! 🚀
          </p>
        </div>
      </div>
    </>
  )
}


const page = () => {
  return AppLayout({ main: about_page() })
}
export default page;
