import { combineReducers } from 'redux';
import sessionLengthReducer from './sessionLengthReducer';
import breakLengthReducer from './breakLengthReducer';
import ActiveReducer from './activeReducer';


export default combineReducers({
    sessionLength: sessionLengthReducer,
    breakLength: breakLengthReducer,
    active: ActiveReducer
})