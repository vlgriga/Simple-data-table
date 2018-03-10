import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions/types';

export default function ( state = [], action) {
    switch( action.type) {
        case ADD_NOTE:
            return [...state, {
                id: action.payload.id,
                name: action.payload.name,
                surname: action.payload.surname,
                date: action.payload.date
            }] || false;

        case DELETE_NOTE:
            return state.filter( (index) => {
                return index.id !== action.payload
            })  || false;

        case EDIT_NOTE:
            return state.map( (index) => {
                if(index.id === action.payload.id) 
                    return {
                        id: action.payload.id,
                        name: action.payload.name,
                        surname: action.payload.surname,
                        date: action.payload.date
                    } 
                else {
                    return index;
                }
            }) || false;

        default:
            return state;
    }
}