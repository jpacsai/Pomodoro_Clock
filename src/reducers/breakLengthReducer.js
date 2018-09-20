export default function breakLengthReducer(state = 5, action) {
    console.log(action.type)
    switch(action.type) {
        case 'INCREMENT_BREAK':
            return state + 1 > 60 ? 60 : ++state;

        case 'DECREMENT_BREAK':
            return state - 1 === 0 ? 1 : --state;

        default:
            return state;
    }
}