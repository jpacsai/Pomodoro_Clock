export default function breakLengthReducer(state = 5, action) {
    
    switch(action.type) {
        case 'INCREMENT_BREAK':
            return ++state;

        case 'DECREMENT_BREAK':
            return --state;

        default:
            return state;
    }
}