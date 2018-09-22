export default function displayReducer(state = {
    sessionDisplay: {
        min: 25,
        sec: 0
    },
    breakDisplay: {
        min: 5,
        sec: 0
    },
    sessionSet: 25,
    breakSet: 5,
    type: 'session'
}, action) {

    switch(action.type) {
        case 'TICK':
            let tick = Object.assign({}, state);
            tick.sessionDisplay.min = tick.sessionDisplay.sec === 0 ? tick.sessionDisplay.min === 0 ? 59 : --tick.sessionDisplay.min : tick.sessionDisplay.min;
            tick.sessionDisplay.sec = tick.sessionDisplay.sec === 0 ? 59 : --tick.sessionDisplay.sec;
            console.log('tick');
            return tick;

        case 'INCREMENT_SESSION_TRUE':
            console.log('incr_true')
            let incrTrue = Object.assign({}, state);
            incrTrue.sessionSet = incrTrue.sessionSet + 1 > 60 ? incrTrue.sessionSet : incrTrue.sessionSet++;
            incrTrue.sessionDisplay.min = incrTrue.sessionSet;
            return incrTrue;

        case 'DECREMENT_SESSION_TRUE':
            console.log('decr_true')
            let decrTrue = Object.assign({}, state);
            decrTrue.sessionSet = decrTrue.sessionSet - 1 === 0 ? decrTrue.sessionSet : decrTrue.sessionSet--;
            decrTrue.sessionDisplay.min = decrTrue.sessionSet;
            return decrTrue;

        case 'INCREMENT_SESSION_FALSE':
            console.log('incr_false')
            let incrFalse = Object.assign({}, state);
            incrFalse.sessionSet = incrFalse.sessionSet - 1 === 0 ? incrFalse.sessionSet : incrFalse.sessionSet--;
            return incrFalse;

        case 'DECREMENT_SESSION_FALSE':
            console.log('decr_false')
            let decrFalse = Object.assign({}, state);
            decrFalse.sessionSet = decrFalse.sessionSet - 1 === 0 ? decrFalse.sessionSet : decrFalse.sessionSet--;
            return decrFalse;

        case 'STOP':
            let stop = Object.assign({}, state);
            stop.sessionDisplay.min = stop.sessionSet;
            stop.sessionDisplay.sec = 0
            stop.breakDisplay.min = stop.breakSet;
            stop.breakDisplay.sec = 0;
            return stop;

        case 'RESET':
            let reset = Object.assign({}, state);
            reset.sessionDisplay.min = 25;
            reset.sessionDisplay.sec = 0;
            reset.breakDisplay.min = 5;
            reset.breakDisplay.sec = 0;
            reset.sessionSet = 25;
            reset.breakSet = 5;
            return reset;

        default:
            return state;
    }
}