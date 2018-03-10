import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions/types';

export default function ( state = [], action) {
    switch( action.type) {
        case ADD_NOTE:
            console.log("state", state);
            return [...state, {
                id: action.payload.id,
                name: action.payload.name,
                surname: action.payload.surname,
                date: action.payload.date
            }] || false;

        case DELETE_NOTE:
            return state.filter( (index,key) => {
                console.log(index);
                console.log(action.payload.id);
                return index.noteID !== action.payload.id
            })  || false;

        case EDIT_NOTE:
            return action.payload || false;

        default:
            return state;
    }
}