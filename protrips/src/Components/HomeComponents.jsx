import React, { Component } from 'react';
import './Components.css';
import service from './Service.js';

class HomeComponents extends Component {

constructor(){
    super();
    this.state={
        code:1
    }
}
componentDidMount(){
    this.code=service.sharedData;
    console.log(this.code);
    console.log(service.sharedData);
    this.setState({code:service.sharedData})
}
    // element=<h2 id="value">Total Trips: {this.code} </h2> ;
    render() {
        return (
            <div className="home">
                <h2 id="value">Total Trips: {this.state.code} </h2>    
            </div>
        );
    }

//ReactDOM.render(element,document.getElementById("value"));
}
export default HomeComponents;