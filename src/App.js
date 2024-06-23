
import React from 'react';

import './Asset/CSS-Files/App.css'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='app-header'>

          <div className='title'>Welcome To My Portfolio ❤️ </div>

          <div className='navbar'>
            <a href='#about' className='nav-link'>About</a>
            <a href='#edu' className='nav-link'>Education</a>
            <a href='#skill' className='nav-link'>Skill</a>
            <a href='#exp' className='nav-link'>Experience</a>
            <a href='#' className='nav-link'>Resume</a>
          </div>

        </div>

        <div className='app-body'></div>

        <div className='app-footer'></div>
      </div>
    )
  }
} export default App;
