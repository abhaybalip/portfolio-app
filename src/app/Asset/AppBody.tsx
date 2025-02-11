'use client';

// modules
import Head from 'next/head';
import React from 'react';

// react-icons
import { FaArrowCircleUp, FaBars, FaTimes } from 'react-icons/fa';

// component
import './Script/App'

// Data
import NavList from './NavData';

// Styles
import './Style/App.css';
import '../globals.css'

function App_(maincontent?: Function) {

  const [navVisible, setNavVisible] = React.useState(false);

  return (
    <>
      {/* main app */}
      <div className='app'>

        {/* app nav section */}
        <div className='app-nav'>

          {/* big navbar */}
          <div className='app-nav-bar'>
            {
              NavList.map((item, index) => {
                return (
                  <a key={index} className='nav-bar-item' href={item.path}>{item.name}</a>
                )
              })
            }
          </div>

          {/* small navbar */}
          <div className='app-nav-s'>
            <div className='nav-s-list' style={{
              border: navVisible ? '1px solid var(--border-color)' : 'none',
              borderRadius: '10px'
            }}>
              <div onClick={() => setNavVisible(!navVisible)}>
                {navVisible ? <FaTimes className='nav-s-b' /> : <FaBars className='nav-s-b' />}
              </div>
              <div className='nav-s-l' style={{
                display: navVisible ? 'flex' : 'none'
              }}>
                {
                  NavList.map((item, index) => {
                    return (
                      <a key={index} className='nav-s-li' href={item.path}>{item.name}</a>
                    )
                  })
                }
              </div>
            </div>
          </div>

          {/* goto top button */}
          <div>
            {<FaArrowCircleUp className='nav-top-b' />}
          </div>

        </div>

        {/* app-main section */}
        <div className='app-main'>
          {maincontent ? maincontent() : null}
        </div>

        {/* app footer */}
        <div className='app-footer'>
          <div>Thank You 💝</div>
          <code>DevelopedBy @AbhayBalip &copy;-{new Date().getUTCFullYear()}</code>
        </div>

      </div>
      {/* app end */}
    </>
  )
}

export { App_ };
