export default function ActiveReducer(state = false, action) {

    switch(action.type) {
        case 'SWITCH':
            return state === false ? true : false;
            
        default:
            return state;
    }
}