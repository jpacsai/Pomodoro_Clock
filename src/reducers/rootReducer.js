import { combineReducers } from 'redux';
import sessionLengthReducer from './sessionLengthReducer';
import breakLengthReducer from './breakLengthReducer';
import activeReducer from './activeReducer';
import displayReducer from './displayReducer';


export default combineReducers({
    sessionLength: sessionLengthReducer,
    breakLength: breakLengthReducer,
    active: activeReducer,
    display: displayReducer
})