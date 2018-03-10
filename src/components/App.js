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
    this.togglePopup = this.togglePopup.bind(this);

  } 

  editHandler(id) {
    this.togglePopup();
    this.props.editNote(id);
  }
 

  deleteHandler() {

  }

  togglePopup(user, editMode = false) {
    this.setState({
      showPopup: !this.state.showPopup,
      editMode: editMode,
      user: user
    });
  }

  render() {
    return (
      <div className="app">
        <NavBar 
          togglePopup={this.togglePopup}/>

        <MainTable 
          notes={this.props.notes}
          editNote={this.togglePopup} 
          close={this.togglePopup}
          deleteNote={this.props.deleteNote}/>


        {/* Open/Cloase Popup */}
        {this.state.showPopup ? 
          <Popup 
            id={this.props.notes.length}
            user={ (this.state.editMode) ? this.state.user : null}
            text='Title' 
            addNote={this.props.addNote}
            close={this.togglePopup}/> : null}
        {/* Open/Cloase Popup */}
      </div>
    );
  }
}


function mapStateToProps({notes}) {
  return {
    notes: notes
  }
}


export default connect(mapStateToProps,actions)(App);

