import React from "react"

import './Asset/css-file/App.css'

import { About } from "./Component/About"
import { Education } from "./Component/Education"
import { Experience } from "./Component/Experiece"
import { Skills } from "./Component/Skills"


export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <div id='app-header'>
          <h3>Welcome to My Portfolio ❤️</h3>

            <nav id="nav-bar">
              <a href="#about-body">About</a>
              <a href="#edu-body">Education</a>
              <a href="#exp-body">Experiece</a>
              <a href="#skill-body">Skills</a>

            </nav>
        </div>

        <div id="app-body">

          {About()}

          {Education()}

          {Experience()}

          {Skills()}

        </div>


        <div id='app-footer'>
          <pre>
            Developed @AbhayBalip ❤️ Copyright &copy; - {new Date().getFullYear()}
          </pre>
        </div>
      </>
    )
  }
}
