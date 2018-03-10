import React, { Component } from 'react';



class TableHeader extends Component {
  render() {
    return (      
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Date of birthday</th>
          </tr>
        </thead>      
    );
  }
}

export default TableHeader;
