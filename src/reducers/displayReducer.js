let timing = null;

export default function displayReducer(state = [[25,0],[5,0],'session'], action) {

    let sessionMin = state[0][0];
    let sessionSec = state[0][1];
    let breakMin = state[1][0];
    let breakSec = state[1][1];
    let processType = state[2];

    switch(action.type) {

        case 'TICK':
        /*
            if (processType === 'session') {
                if (sessionSec === 0 && sessionMin - 1 === 0) {
                    processType = 'break';
                }
                else {
  
                }
            }
            else {
                if (breakSec === 0 && breakMin - 1 === 0) {
                    processType = 'session';   
                                 
                }
            }
        */
            sessionMin = sessionSec === 0 ? sessionMin === 0 ? 59 : --sessionMin : sessionMin;
            sessionSec = sessionSec === 0 ? 59 : --sessionSec;
            return [[sessionMin,sessionSec],[breakMin,0],'session'];

        case 'INCREMENT_SESSION_TRUE':
            sessionMin = sessionMin + 1 > 60 ? sessionMin : ++sessionMin;
            return [[sessionMin,0],[breakMin,0],'session'];

        case 'DECREMENT_SESSION_TRUE':
            sessionMin = sessionMin - 1 === 0 ? sessionMin : --sessionMin;
            return [[sessionMin,0],[breakMin,0],'session'];

        case 'STOP':
            clearInterval(timing);
            return [[action.sessionLength, 0], [action.breakLength, 0], 'session'];

        case 'RESET':
            clearInterval(timing);
            return [[25,0], [5,0], 'session'];

        default:
            return state;
    }
}