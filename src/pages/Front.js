import React, { Component } from 'react';
//import logo from '../logo.svg';
import logo from '../logo2.png'
import '../css/App.css';

export class Front extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Skarpiez.
            {/* Edit <code>src/App.js</code> and save to reload. */}
          </p>
          {/* <a
            className="App-link"
            href="#"
            rel="noopener noreferrer"
          >
            Login
          </a> */}
          <a
            className="App-link"
            href="/visual"
            rel="noopener noreferrer"
          >
            Visual
          </a>
          <a
            className="App-link"
            href="/Crawliez"
            rel="noopener noreferrer"
          >
            Crawliez
          </a>
        </header>
      </div>
    );
  }
}
