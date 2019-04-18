import React, { Component } from 'react';
import logo from '../logo2.png'
import logo2 from "../crawliez.png"
// import '../css/Visual.css';
import '../css/Visual2.css';
// import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const style = {
    width: 300,
    height: 20
}

export class Crawliez extends Component {

    componentWillMount(){

    }

    componentDidMount() {
        // this.callApi()
      }

    state = {
        response: 'Response...',
        post: '',
        responseToPost: '',
        buttonWidth: 300,
        buttonHeight: 200,
        message: "Fuck it all yo!"
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json()
        if (response.status !== 200) {
            throw Error(body.message);
        }
        else{
            console.log(body);
            this.setState({
                response: body.express
            })
        }
      };

      handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: this.state.message }),
        });
        const body = await response.text();
        this.setState({ response: body });
      };

      onChange = (event) => { this.setState({ message: event.target.value }) }

    constructor(props){
        // const url = 'https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json';
        super(props);

    }

    render(state) {

        return (
            <div style={{"marginTop": 100}}className="App">

                <div>
                    <img src={logo2} />
                    {/* <img src={logo2} className="App-logo" alt="logo" /> */}
                </div>

                <div style={{"color": "white", fontSize: 50}}>
                    Enter a site, find out if its crawlable.
                </div>
                
                <div id="inputs">
                    <input name="textInput" onChange={this.onChange} size="35" placeholder="Enter a website to see crawlability" style={{ width: "30vw", height: "38px" }}type="text"></input>
                    <input style={{ border: "none", color: "#282C34", backgroundColor: "#3EB0FF", height: "38px", marginLeft: "20px"}} onClick={ this.handleSubmit }type="submit" className="btn btn-primary" value="Lookup"></input>
                </div>

                <div id="response">
                    <h1 id="response-title">This is the Response:</h1>
                    <p>{this.state.response}</p>
                </div>
          </div>
        )
    }
}