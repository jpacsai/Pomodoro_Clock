export default function sessionLengthReducer(state = 25, action) {
    
    switch(action.type) {
        case 'INCREMENT_SESSION_FALSE':
        case 'INCREMENT_SESSION_TRUE':
            return state + 1 > 60 ? 60 : ++state;

        case 'DECREMENT_SESSION_FALSE':
        case 'DECREMENT_SESSION_TRUE':
            return state - 1 === 0 ? 1 : --state;

        case 'RESET':
            return 25;

        default:
            return state;
    }
}