export default function ActiveReducer(state = false, action) {

    switch(action.type) {
        case 'SWITCH':
            return state === false ? 'count' : false;
            
        default:
            return state;
    }
}