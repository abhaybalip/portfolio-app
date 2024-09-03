"use client"

// Next Lib 
import 'next/image'

// App component 
import About from './Component/About'
import Education from './Component/Education'
import Skill from './Component/Skill'
import Contact from './Component/Contact'

// Asset 
import './Asset/CSS-Files/Theme.css'
import './Asset/CSS-Files/App.css'
import Image from 'next/image'
import { useState } from 'react'

const curYear = new Date().getFullYear()

function App_Header() {
  return (
    <div className='app-header'>
      <div className='title'>Welcome To My Portfolio 💝 </div>

      <div className='navbar'>
        <a href='#about' className='nav-link'>About</a>
        <a href='#edu' className='nav-link'>Education</a>
        <a href='#skill' className='nav-link'>Skillset</a>
        <a href='#exp' className='nav-link'>Experience</a>
        <a href='#contact' className='nav-link'>Contact</a>
        <a href={'https://docs.google.com/document/d/1tiuQVZMKxCCUWFQSHS2ckqPuhJt6eVVl2i1b_qmwQAM/edit?usp=drive_link'}
          target='_blank' download="CV-AbhayBalip.pdf" className='nav-link'>Resume</a>
      </div>

    </div>
  )
}

function App_Body() {
  return (
    <div className='app-body'>
      {About()}
      {Education()}
      {Skill()}
      {Contact()}
    </div>
  )
}

function App_Footer() {
  return (
    <div className='app-footer'>
      Developed by @abhaybalip Copyright &copy; {curYear}
    </div>
  )
}

function Loading() {
  return (
    <div className='load'>
      <Image src={require('./Asset/Image/Loading.gif')} alt={"loading"}></Image>
    </div>
  )
}

function App(params: any) {

  const [IsLoading, setIsLoading] = useState(true)
  var timer = setTimeout(() => {
    setIsLoading(false)

    return ()=>{
      clearTimeout(timer)
    }
  }, 1500);
  return (
    <div>
      {
        IsLoading ?
          <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',

            height: '100vh',
            width: '100vw',
          }}>
            <Image src={require('./Asset/Image/Loading.gif')} alt='loading'></Image>
          </div> :
          <div className='app'>
            {App_Header()}
            {App_Body()}
            {App_Footer()}
          </div>
      }
    </div>
  )
}
export default App;
