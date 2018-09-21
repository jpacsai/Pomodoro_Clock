export default function displayReducer(state = [[25,0],[5,0],'session'], action) {

    let sessionMin = state[0][0];
    let sessionSec = state[0][1];
    let breakMin = state[1][0];
    let breakSec = state[1][1];
    let processType = state[2];

    switch(action.type) {
        case 'INCREMENT_SESSION_TRUE':
            sessionMin = sessionMin + 1 > 60 ? sessionMin : ++sessionMin;
            return [[sessionMin,0],[breakMin,0],'session']

        case 'DECREMENT_SESSION_TRUE':
            sessionMin = sessionMin - 1 === 0 ? sessionMin : --sessionMin;
            return [[sessionMin,0],[breakMin,0],'session']

        
        case 'STOP':
            return [[action.sessionLength, 0], [action.breakLength, 0], 'session'];

        case 'RESET':
            return [[25,0], [5,0], 'session'];

        default:
            return state;
    }
}