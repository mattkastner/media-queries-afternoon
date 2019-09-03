import React, { Component } from 'react'

import 'reset-css'
import './App.css'
import './Header.css'
import './Content.css'

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      clicked: false
    }

  }

  // animate = () => {
  //   this.setState({
  //     clicked: !this.state.clicked
  //   })
  // }


  render() {
    console.log(this.state.clicked)
    return (
      <div className='app' onScroll={this.animate}>
        <div className='main-container'>
          <header className='top-bar-container'>
            <div className='top-bar'>
              <h1 className='company-title'>Start Bootstrap</h1>
              <nav className='nav-list-container'>
                <ul className='nav-list'>
                  <li>SERVICES</li>
                  <li>PORTFOLIO</li>
                  <li>ABOUT</li>
                  <li>TEAM</li>
                  <li>CONTACT</li>
                </ul>
              </nav>
              <div className='mobile-menu' onClick={() => this.setState({clicked:!this.state.clicked})}><span>MENU </span> &#9776;</div>
            </div>
          </header>
          {/* Slide Out Menu */}
          <div className={
              this.state.clicked ?
              'menu slide'
              :
              'menu'
          }>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
          </div>
          <div className='content-container'>
            <div className='intro-container'>
              <div className='middle-intro-container'>
                <div className='welcome'>Welcome To Our Studio!</div>
                <div className='meet-you'>IT'S NICE TO MEET YOU</div>
                <button className='tell-me-btn'>TELL ME MORE</button>
              </div>
            </div>
            <div className='services-container'></div>
          </div>
        </div>
      </div>
    )
  }
}
