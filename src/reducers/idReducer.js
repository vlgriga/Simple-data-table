import { INCREMENT_ID } from '../actions/types';

export default function ( state = [], action, counter = 0) {
    switch( action.type) {
        case INCREMENT_ID:
            console.log("INC SATERA");
            return [...state, {counter: counter + 1} ]|| false;

        default:
            return state;
    }
}