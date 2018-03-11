import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, INCREMENT_ID } from './types';

export const addNote = (newNote) => dispatch => {
    dispatch({ type: ADD_NOTE, payload: newNote });
};    

export const deleteNote = (noteID) => dispatch => {
    dispatch({ type: DELETE_NOTE, payload: noteID });
};

export const editNote = (note) => dispatch => {
    dispatch({ type: EDIT_NOTE, payload: note });
};

export const incrementID = () => dispatch => {
    console.log("AC type");
    dispatch({ type: INCREMENT_ID });
};