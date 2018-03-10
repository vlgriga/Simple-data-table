import React from 'react';
import { Button, FormGroup , ControlLabel , FormControl } from 'react-bootstrap';
import  DatePicker from "react-datepicker";
import moment from 'moment';

import { connect } from 'react-redux';
import * as actions from '../actions';


class Popup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          startDate: moment(),
          showPopup: false  ,
          name: '',
          surname: ''
        }
        this.submitHandler = this.submitHandler.bind(this);
        
    } 

    submitHandler(e) {
        e.preventDefault();
        if(this.state.name.length > 1) {
            this.props.addNote({
                id: this.props.id,
                name: this.state.name,
                surname: this.state.surname,
                date: this.state.startDate._d.toLocaleDateString()
            });
            this.props.close(); 
        } else {
            alert("Name cannot be null");
        }       
    }

    handleChangeDate(date) {
        this.setState({
            startDate: date
        });        
    }
    handleChangeName(e) {
        this.setState({ name: e.target.value });
    }
    handleChangeSurname(e) {
        this.setState({ surname: e.target.value });
    }



    render() {

        return (
        <div className='popup'>
            <div className='popup_inner'>
            
            {/* FORM */}
            <form onSubmit={this.submitHandler}>
                <FormGroup
                    controlId="formBasicText">

                    
                    <ControlLabel>Your name</ControlLabel>
                    <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Enter name"
                    onChange={this.handleChangeName.bind(this)}
                    />

                    <ControlLabel>Your surname</ControlLabel>
                    <FormControl
                    type="text"
                    value={this.state.surname}
                    placeholder="Enter surname"
                    onChange={this.handleChangeSurname.bind(this)}
                    /> 


                    <DatePicker
                    dateFormat="YYYY/MM/DD"
                    selected={this.state.startDate}
                    onChange={this.handleChangeDate.bind(this)} 
                    />
                </FormGroup>
                
                <Button bsStyle="success" type="submit">Confirm</Button>
                <Button bsStyle="warning" onClick={this.props.close}>Cancel</Button>
            </form>            
            </div>
        </div>
        );
    }
}

export default Popup;