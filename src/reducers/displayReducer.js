export default function displayReducer(state = [25,0], action) {

    let min = state[0];
    let sec = state[1];

    switch(action.type) {
        case 'INCREMENT_SESSION_TRUE':
            min = min + 1 > 60 ? min : ++min;
            return [min, sec];

        case 'DECREMENT_SESSION_TRUE':
            min = min - 1 === 0 ? min : --min;
            return [min, sec];

        case 'RESET':
            return [25, 0];

        default:
            return state;
    }
}