import {combineReducers } from 'redux';
import noteReducer from './noteReducer';
import idReducer from './idReducer';

export default combineReducers({
    notes: noteReducer,
    id: idReducer
});