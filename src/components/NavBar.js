import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Button bsStyle="primary" onClick={this.props.togglePopup}>Add</Button>
      </div>
    );
  }
}

export default NavBar;

