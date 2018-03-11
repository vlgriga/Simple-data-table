import React, { Component } from 'react';
import deleteButton from '../delete.png';
import editButton from '../edit.png';


class TableRow extends Component {
  render() {
    console.log("user", this.props.user);
    return (
      <tr>
          <td>{this.props.user.name}</td>
          <td>{this.props.user.surname}</td>
          <td>{this.props.user.date._d.toLocaleDateString()}</td>
          <td><img 
            alt="edit"
            src={editButton} 
            className="img-button"
            onClick={() => this.props.editHandler(this.props.user)}/></td>
          <td><img 
            alt="delete"
            src={deleteButton} 
            className="img-button"            
            onClick={() => this.props.deleteNote(this.props.user.id)}/></td>
      </tr>
    )
  }
}

export default TableRow;
