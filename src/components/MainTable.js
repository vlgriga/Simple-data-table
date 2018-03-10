import React, { Component } from 'react';
import { Table  } from 'react-bootstrap';
import { connect } from 'react-redux';

import TableRow from './TableRow';
import TableHeader from './TableHeader';
import * as actions from '../actions';

class MainTable extends Component {
  render() {

    var user = [
      {
        name: "Petr",
        surname: "Ivanov"
      },
      {
        name: "Petr",
        surname: "Ivanov"
      }
    ]

    var user2 = {
      name: "Petr",
      surname: "Ivanov"
    }

    return (
      <Table responsive >
        <TableHeader />
        <tbody>
          {this.props.notes.map( (index,key) => {
            return (
            <TableRow 
              deleteNote={this.props.deleteNote} 
              editNote={this.props.editNote} 
              user={index}  
              key={key}/>)  
          })}                   
        </tbody> 
      </Table >     
    );
  }
} 

export default MainTable;
