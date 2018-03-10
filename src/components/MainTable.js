import React, { Component } from 'react';
import { Table  } from 'react-bootstrap';

import TableRow from './TableRow';
import TableHeader from './TableHeader';

class MainTable extends Component {
  render() {
    return (
      <Table responsive >
        <TableHeader />
        <tbody>
          {this.props.notes.map( (index,key) => {
            return (
            <TableRow 
              deleteNote={this.props.deleteNote} 
              editHandler={this.props.editHandler} 
              user={index}  
              key={key}/>)  
          })}                   
        </tbody> 
      </Table >     
    );
  }
} 

export default MainTable;
