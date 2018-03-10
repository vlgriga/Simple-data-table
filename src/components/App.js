import React, { Component } from 'react';

import NavBar from './NavBar';
import MainTable from './MainTable';
import Popup from "./Popup";
import * as actions from '../actions';
import { connect } from 'react-redux';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showPopup: false,
      editMode: false,
      user: ''
    }
    this.editHandler = this.editHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.togglePopup = this.togglePopup.bind(this);

  } 

  editHandler(user) {
    this.setState({
      showPopup: !this.state.showPopup,
      editMode: true,
      user: user
    });    
  }

  addHandler(user) {
    this.togglePopup();
    this.props.addNote(user);
    this.props.incrementID();
  }
 

  togglePopup(user) {
    this.setState({
      showPopup: !this.state.showPopup,
      editMode: false ,
      user: user
    });
  }

  render() {
    console.log(this.props.id);
    return (
      <div className="app">
        <NavBar 
          togglePopup={this.togglePopup}/>

        <MainTable 
          notes={this.props.notes}
          editHandler={this.editHandler} 
          close={this.togglePopup}
          deleteNote={this.props.deleteNote}/>


        {/* Open/Cloase Popup */}
        {this.state.showPopup ? 
          <Popup             
            id={this.props.notes.length}
            user={this.state.user}
            addNote={this.addHandler}
            editNote={this.props.editNote}
            close={this.togglePopup}
            editMode={this.state.editMode}
          /> : null}
        {/* Open/Cloase Popup */}
      </div>
    );
  }
}


function mapStateToProps({notes, id}) {
  return {
    notes: notes,
    id: id
  }
}


export default connect(mapStateToProps,actions)(App);

