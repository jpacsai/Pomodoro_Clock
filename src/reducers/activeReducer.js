export default function ActiveReducer(state = false, action) {

    switch(action.type) {
        case 'COUNT':
            return state === 'count' ? 'pause' : 'count';

        case 'STOP':
        case 'RESET':
            return 'stop';
            
        default:
            return state;
    }
}