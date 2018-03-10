import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    console.log(this.props.user);
    return (
      <tr>
          <td>{this.props.user.name}</td>
          <td>{this.props.user.surname}</td>
          <td>{this.props.user.date}</td>
          <td><button onClick={() => this.props.editNote(this.props.user, true)}>Edit</button></td>
          <td><button onClick={() => this.props.deleteNote(this.props.user.id)}>Delete</button></td>
      </tr>
    )
  }
}

export default TableRow;
