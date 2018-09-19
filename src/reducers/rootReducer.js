import { combineReducers } from 'redux';
import sessionLengthReducer from './sessionLengthReducer';
import breakLengthReducer from './breakLengthReducer';


export default combineReducers({
    sessionLength: sessionLengthReducer,
    breakLength: breakLengthReducer 
})