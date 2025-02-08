
'use client';

// modules
import Head from 'next/head';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// react-icons
import { FaArrowCircleUp, FaBars, FaTimes } from 'react-icons/fa';

// component
import Home from './Asset/Home';

// Data
import NavList from './Asset/NavData';

// Styles
import './Asset/Style/App.css';

function HomePage() {

  const [navVisible, setNavVisible] = React.useState(false);
  const [topButtonVisible, setTopButtonVisible] = React.useState(false);
  window.onscroll = (scroll) => {
    if (window.scrollY > 3) {
      setTopButtonVisible(true);
    } else {
      setTopButtonVisible(false);
    }
  }

  return (
    <>
      {/* main app */}
      <div id='app'>

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
            {<FaArrowCircleUp
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }} className='nav-top-b' style={{
                visibility: topButtonVisible ? 'visible' : 'hidden'
              }} />}
          </div>

        </div>

        {/* app-main section */}
        <div className='app-main'>
          <BrowserRouter>
            <Routes>
              {
                NavList.map((item, index) => {
                  return (
                    <Route key={index} path={item.path} Component={item.component}>{item.name}</Route>
                  )
                })
              }
            </Routes>
          </BrowserRouter>
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

export default HomePage;

