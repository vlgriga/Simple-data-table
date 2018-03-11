import { INCREMENT_ID } from '../actions/types';

export default function ( state = 0 , action) {
    switch( action.type) {        
        case INCREMENT_ID:
            return state + 1|| false;

        default:
            return state;
    }
}