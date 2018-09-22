export default function ActiveReducer(state = 'stop', action) {

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