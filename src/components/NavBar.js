import React, { Component } from 'react';
import { Button, FormGroup , ControlLabel , FormControl } from 'react-bootstrap';
import  DatePicker from "react-datepicker";
import moment from 'moment';
import * as actions from '../actions';


import 'react-datepicker/dist/react-datepicker.css';



class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <button onClick={this.props.togglePopup}>Add</button>
      </div>
    );
  }
}

export default NavBar;

