export default function sessionLengthReducer(state = 25, action) {
    
    switch(action.type) {
        case 'INCREMENT_SESSION':
            return ++state;

        case 'DECREMENT_SESSION':
            return --state;

        default:
            return state;
    }
}