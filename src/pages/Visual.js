import React, { Component } from 'react';
// import logo from '../logo.svg';
//import logo from './logo2.png'
import '../css/Visual.css';
import { Graph } from 'react-d3-graph';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { hideContext } from "../js/hideContext";
import { unhideContext } from "../js/hideContext";


var fs = require('fs');
var d3 = require('d3');
 
var mouseX = 0;
var mouseY = 0;
// graph payload (with minimalist structure)

// const data = {
//     nodes: [{ id: 'Harry', color: "lightgreen", size: 1200}, { id: 'Sally', size: 400, color: "red" }, { id: 'Alice', size: 650, color: "blue" }],
//     links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
// };
 
// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
        automaticRearrangeAfterDropNode: true,
        collapsible: false,
        directed: true,
        // focusAnimationDuration: 0.25,
        // focusZoom: 1,
        highlightOpacity: 1,
        linkHighlightBehavior: false,
        maxZoom: 8,
        minZoom: 0.1,
        nodeHighlightBehavior: false,
        panAndZoom: false,
        staticGraph: false,
    d3: {
        alphaTarget: 0.05,
        gravity: -500,
        linkLength: 100,
        linkStrength: 1
    },
    node: {
        renderLabel: true,
        fontSize: "18px",
        // color: '#8CDCDA',
        // size: 400,
        svg: "",
        highlightStrokeColor: 'blue'
    },
    link: {
        fontWeight: "normal",
        // type: "CURVE_SMOOTH",
        highlightColor: 'lightblue'
    },
};

const file = require("../JSON/stuff.json");
var flag = false;
var newData = {};
var newLinks = {};

var top = 5;

export class Visual extends Component {
    
    componentDidMount(){
        // console.log(file);
    }

    constructor(props){
        super(props);
    }

    state = {
        display: 'none',
        spaceHovered: true,
        nodeHovered: false,
        modalTop: mouseY,
        modalLeft: mouseX,
        modalDisplay: 'none',
        modalOpacity: 0,
        data: {
            nodes: [{ id: 'Harry', color: "lightgreen", size: 1200}, { id: 'Sally', size: 400, color: "red" }, { id: 'Alice', size: 650, color: "blue" }],
            links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
        }
    }

    // graph event callbacks
    onClickGraph = () => {
        hideContext();
        // window.alert(`Clicked the graph background`);
    };

    handleClick = (e, data) => {
        console.log(data.foo);
        console.log("HWLEALSEJSA");
    }

    
    
    onClickNode = (nodeId) => {

    };
    
    onRightClickNode = (event, nodeId) => {
        unhideContext();
        // window.alert(`Right clicked node ${nodeId}`);
    };
    
    onMouseOverNode = (nodeId) => {
        // this.setState({
        //     spaceHovered: false,
        //     nodeHovered: true,
        // })

       // console.log(file);
        // window.alert(`Mouse over node ${nodeId}`);
    };
    
    onMouseOutNode = (nodeId) => {
        // this.setState({
        //     nodeHovered: false,
        //     spaceHovered: true,
        // })
    };
    
    onClickLink = function(source, target) {
        // window.alert(`Clicked link between ${source} and ${target}`);
    };
    
    onRightClickLink = function(event, source, target) {
        // window.alert(`Right clicked link between ${source} and ${target}`);
    };
    
    onMouseOverLink = function(source, target) {
        // window.alert(`Mouse over in link between ${source} and ${target}`);
    };
    
    onMouseOutLink = function(source, target) {
        // window.alert(`Mouse out link between ${source} and ${target}`);
    };

    render(state) {

        return (
                <div onMouseMove={function(e) {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    console.log(mouseX);
                    console.log(mouseY);
                }}className="well">
            
            <ContextMenuTrigger id="some1" disable={!this.state.spaceHovered}>
            <ContextMenuTrigger id="some" disable={!this.state.nodeHovered}>
                <Graph
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    className="some"
                    data={this.state.data}
                    config={myConfig}
                    onClickNode={this.onClickNode}
                    onRightClickNode={this.onRightClickNode}
                    onClickGraph={this.onClickGraph}
                    onClickLink={this.onClickLink}
                    onRightClickLink={this.onRightClickLink}
                    onMouseOverNode={this.onMouseOverNode}
                    onMouseOutNode={this.onMouseOutNode}
                    onMouseOverLink={this.onMouseOverLink}
                    onMouseOutLink={this.onMouseOutLink}
                />;
                </ContextMenuTrigger></ContextMenuTrigger>
                <div style={{    
                    position: "absolute",
                    top: this.state.modalTop,
                    right: 0,
                    left: this.state.modalLeft,
                    right: 0,
                    width: 200,
                    height: 200,
                    display: this.state.modalDisplay,
                    backgroundColor: "yellow",
                    opacity: this.state.modalOpacity,
                    }}/>

                    <ContextMenu id="some">
                        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
                        ContextMenu Item 1SAP
                        </MenuItem>
                        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
                        ContextMenu Item 2
                        </MenuItem>
                        <MenuItem divider />
                        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
                        ContextMenu Item 3
                        </MenuItem>
                    </ContextMenu>

                    <ContextMenu id="some1">
                        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
                        ContextMenu Item 1FART
                        </MenuItem>
                        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
                        ContextMenu Item 2
                        </MenuItem>
                        <MenuItem divider />
                        <MenuItem data={{foo: 'bar'}} onClick={this.handleClick}>
                        ContextMenu Item 3
                        </MenuItem>
                    </ContextMenu>

                    </div>

        )
    }
}

// const myConfig = {
    
//         "automaticRearrangeAfterDropNode": true,
//         "collapsible": false,
//         "directed": true,
//         "focusAnimationDuration": 0.75,
//         "focusZoom": 1,
//         "highlightDegree": 1,
//         "highlightOpacity": 1,
//         "linkHighlightBehavior": false,
//         "maxZoom": 8,
//         "minZoom": 0.1,
//         "nodeHighlightBehavior": false,
//         "panAndZoom": false,
//         "staticGraph": false,
//         "d3": {
//           "alphaTarget": 0.05,
//           "gravity": -100,
//           "linkLength": 100,
//           "linkStrength": 1
//         },
//         "node": {
//           "color": "#d3d3d3",
//           "fontColor": "black",
//           "fontSize": 8,
//           "fontWeight": "normal",
//           "highlightColor": "SAME",
//           "highlightFontSize": 8,
//           "highlightFontWeight": "normal",
//           "highlightStrokeColor": "SAME",
//           "highlightStrokeWidth": "SAME",
//           "labelProperty": "id",
//           "mouseCursor": "pointer",
//           "opacity": 1,
//           "renderLabel": true,
//           "size": 200,
//           "strokeColor": "none",
//           "strokeWidth": 1.5,
//           "svg": "",
//           "symbolType": "circle"
//         },
//         "link": {
//           "color": "#d3d3d3",
//           "fontColor": "black",
//           "fontSize": 8,
//           "fontWeight": "normal",
//           "highlightColor": "#d3d3d3",
//           "highlightFontSize": 8,
//           "highlightFontWeight": "normal",
//           "labelProperty": "label",
//           "mouseCursor": "pointer",
//           "opacity": 1,
//           "renderLabel": false,
//           "semanticStrokeWidth": false,
//           "strokeWidth": 1.5
//         }
// }

        // if(this.state.modalDisplay === 'none'){
        //     this.setState({
        //         modalTop: mouseY,
        //         modalLeft: mouseX,
        //         modalDisplay: '',
        //         modalOpacity: 1,
        //     })
        // }
        // else{
        //     this.setState({
        //         modalTop: mouseY,
        //         modalLeft: mouseX,
        //         modalDisplay: 'none',
        //         modalOpacity: 0,
        //     })
        // }
        
        // if(top != 0){
        //     var link = { source: "", target: "" };
        //     if(!flag){
        //         newData = {
        //             nodes: [{ id: 'Harry', color: "lightgreen", size: 1200}, { id: 'Sally', size: 400, color: "red" }, { id: 'Alice', size: 650, color: "blue" }, { id: 'Jason', size: 950, color: "yellow" }],
        //             links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }, { source: 'Jason', target: 'Sally'}]
        //         }
        //         flag = true;
        //     }
        //     else{
        //         var x = Math.floor(Math.random() * 4) + 1
        //         var y = Math.floor(Math.random() * 4) + 1
        //         var obj = { id: 'Harry', color: "lightgreen", size: 1200}
        //         if(x === 1){ link.source='Vibekatcher'; obj={ id: "Vibekatcher", size: 800 }} else if(x === 2) { link.source='Jdaflame'; obj={ id: "Jdaflame", size: 800 }} else if(x === 3) { link.source='Yoozer'; obj={ id: "Yoozer", size: 400 }} else if(x === 4){ link.source='Future'; obj={ id: "Future", size: 500 }}
        //         if(y === 1){ link.target='Sally'; obj.color = "blue" } else if(y === 2) {link.target='Harry';   obj.color = "green"} else if(y === 3) {link.target='Alice';   obj.color = "yellow"} else if(y === 4){link.target='Jason';   obj.color = "red"}
                
        //         //console.log(obj);
        //         newData.nodes.push(obj);
        //         newData.links.push(link);
    
                
        //     }
    
        //     console.log(newData.nodes);
        //     // var newData = {
        //     //     nodes: [{ id: 'Harry', color: "lightgreen", size: 1200}, { id: 'Sally', size: 400, color: "red" }, { id: 'Alice', size: 650, color: "blue" }, { id: 'Jason', size: 950, color: "yellow" }],
        //     //     links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }, { source: 'Jason', target: 'Sally'}]
        //     // }
    
        //     this.setState({
        //         data: newData,
        //         links: newLinks
        //     })
    
        //     console.log(this.state.modalTop + "hello");
        //     console.log(this.state.modalLeft + "hello");
        //     top--;
        // }


        // modalStyle.left = mouseX;
        // modalStyle.top = mouseY;
        // console.log(modalStyle.left);
        // console.log(modalStyle.top);
        // console.log(event.clientX);
        // window.alert(`Clicked node ${nodeId}`);