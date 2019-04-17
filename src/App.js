import React, { Component } from 'react';
//import logo from '../logo.svg';
import logo from './logo2.png'
import { Route } from 'react-router-dom';
import * as Pages from "./pages/index";
import './css/App.css';

class App extends Component {



  render() {


    return (
      <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
        <Route path="/" exact component={Pages.Front}/>
        <Route path="/visual" component={Pages.Visual}/>
        <Route path="/Crawliez" component={Pages.Crawliez}/>
    </div>
    );
  }
}

export default App;
