import React, { Component } from 'react';
import './Header.css';
import eyeImg from './eye.png';

class Header extends Component {
    render() {
      return (
        <div id="header">
          <img id='eyeImg' alt='eyeImg' src={eyeImg}/>
            <div id='headerTitle'>Jen's Blog</div>
            
        </div>
    );
  }
}

export default Header;