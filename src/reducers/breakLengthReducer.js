export default function breakLengthReducer(state = 5, action) {

    switch(action.type) {
        case 'INCREMENT_BREAK_TRUE':
        case 'INCREMENT_BREAK_FALSE':
            return state + 1 > 60 ? 60 : ++state;

        case 'DECREMENT_BREAK_TRUE':
        case 'DECREMENT_BREAK_FALSE':
            return state - 1 === 0 ? 1 : --state;

        case 'RESET':
            return 5;
            
        default:
            return state;
    }
}