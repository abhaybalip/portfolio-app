
import React from 'react';

import './Asset/CSS-Files/Theme.css';
import './Asset/CSS-Files/App.css';

import About from './Component/About';
import Education from './Component/Education';
import Skillset from './Component/Skillset';
import Contact from './Component/Contact';

class App extends React.Component {
  constructor() {
    super()
    this.currYear = new Date().getFullYear()
    this.resumeLink = require('./Asset/CV_AbhayBalip.pdf')
  }

  App_Header() {
    return (
      <div className='app-header'>
        <div className='title'>Welcome To My Portfolio ❤️ </div>

        <div className='navbar'>
          <a href='#about' className='nav-link'>About</a>
          <a href='#edu' className='nav-link'>Education</a>
          <a href='#skill' className='nav-link'>Skillset</a>
          <a href='#exp' className='nav-link'>Experience</a>
          <a href='#contact' className='nav-link'>Contact</a>
          <a href={this.resumeLink} download="CV_AbhayBalip.pdf" className='nav-link'>Resume</a>
        </div>

      </div>
    )
  }

  App_Body() {
    return (
      <div className='app-body'>
        {About()}
        {Education()}
        {Skillset()}
        {Contact()}
      </div>
    )
  }

  App_Footer() {
    return (
      <div className='app-footer'>
        Developed by @abhaybalip 💝 Copyright &copy; {this.currYear}
      </div>
    )
  }

  render() {
    return (
      <div className='app'>
        {this.App_Header()}

        {this.App_Body()}

        {this.App_Footer()}
      </div>
    )
  }
} export default App;
