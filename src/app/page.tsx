
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

const curYear = new Date().getFullYear()

function App_Header() {
  return (
    <div className='app-header'>
      <div className='title'>Welcome To My Portfolio ❤️ </div>

      <div className='navbar'>
        <a href='#about' className='nav-link'>About</a>
        <a href='#edu' className='nav-link'>Education</a>
        <a href='#skill' className='nav-link'>Skillset</a>
        <a href='#exp' className='nav-link'>Experience</a>
        <a href='#contact' className='nav-link'>Contact</a>
        <a href={'#'} download="CV-AbhayBalip.pdf" className='nav-link'>Resume</a>
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
      Developed by @abhaybalip 💝 Copyright &copy; {curYear}
    </div>
  )
}

function App(params:any) {
  return(
    <div className='app'>
    {App_Header()}
    {App_Body()}
    {App_Footer()}
    </div>
  )  
}
export default App;
