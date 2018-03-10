import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from './types';

export const addNote = (newNote) => dispatch => {
    console.log("addnote action", newNote);
    dispatch({ type: ADD_NOTE, payload: newNote });
};    

export const deleteNote = (noteID) => dispatch => {
    console.log("delete action", noteID);
    dispatch({ type: DELETE_NOTE, payload: noteID });
};

export const editNote = (note) => dispatch => {
    console.log("edit action", note);
    dispatch({ type: EDIT_NOTE, payload: note });
};