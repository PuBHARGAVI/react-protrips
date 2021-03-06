import React, { Component } from 'react';
import service from './Service.js';

export default class ListComponents extends Component {
    constructor(){
        super();
        this.state={
            contacts:[]
        }
    }
    
    componentWillMount(){
        this.setState({contacts:service.sharedArray});
        console.log(service.sharedArray);
    }

    render() {
        
      return (
          <div >
              <h1>List</h1>
              
          {service.sharedArray.map(contact => (
      <div key={contact}>
       {`Date: ${contact.date} Place: ${contact.place} Type: ${contact.type}`}
      </div>
    ))} 
  </div>
          
      );
    }
}