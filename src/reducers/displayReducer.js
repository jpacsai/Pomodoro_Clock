export default function displayReducer(state = {
    sessionSet: 25,
    breakSet: 5,
    type: 'session'
}, action) {

    const audioElem = document.getElementById('beep');

    switch(action.type) {
        /*case 'TICK':
            let tick = Object.assign({}, state);

            if (tick.display.min === 0 && tick.display.sec === 0) {
                tick.type = tick.type === 'session' ? 'break' : 'session';
                tick.display.min = tick.type === 'session' ? tick.sessionSet : tick.breakSet;
                tick.display.sec = 0;
            }
            else {
                tick.display.min = tick.display.sec === 0 ? --tick.display.min : tick.display.min;

                tick.display.sec = tick.display.sec === 0 ? 59 : --tick.display.sec;
            }
            if (tick.display.min === 0 && tick.display.sec === 0) {
                
                let playPromise = audioElem.play();
                if (playPromise !== undefined) {
                    playPromise.then(function() {
                      console.log('play')
                    }).catch(function(error) {
                      console.log('error with audio element')
                    });
                }
            }
            return tick;*/

        case 'INCREMENT_SESSION_TRUE':
            let incrTrue = Object.assign({}, state);
            incrTrue.sessionSet = incrTrue.sessionSet + 1 > 60 ? incrTrue.sessionSet : ++incrTrue.sessionSet;
            incrTrue.display.min = incrTrue.sessionSet;
            return incrTrue;

        case 'DECREMENT_SESSION_TRUE':
            let decrTrue = Object.assign({}, state);
            decrTrue.sessionSet = decrTrue.sessionSet - 1 === 0 ? decrTrue.sessionSet : --decrTrue.sessionSet;
            decrTrue.display.min = decrTrue.sessionSet;
            return decrTrue;

        case 'INCREMENT_SESSION_FALSE':
            let incrFalse = Object.assign({}, state);
            incrFalse.sessionSet = incrFalse.sessionSet + 1 > 60 ? incrFalse.sessionSet : ++incrFalse.sessionSet;
            return incrFalse;

        case 'DECREMENT_SESSION_FALSE':
            let decrFalse = Object.assign({}, state);
            decrFalse.sessionSet = decrFalse.sessionSet - 1 === 0 ? decrFalse.sessionSet : --decrFalse.sessionSet;
            return decrFalse;

        case 'INCREMENT_BREAK':
            let incrBrFalse = Object.assign({}, state);
            incrBrFalse.breakSet = incrBrFalse.breakSet + 1 > 60 ? incrBrFalse.breakSet : ++incrBrFalse.breakSet;
            return incrBrFalse;

        case 'DECREMENT_BREAK':
            let decrBrFalse = Object.assign({}, state);
            decrBrFalse.breakSet = decrBrFalse.breakSet - 1 === 0 ? decrBrFalse.breakSet : --decrBrFalse.breakSet;
            return decrBrFalse;

        case 'STOP':
            let stop = Object.assign({}, state);
            stop.display.min = stop.sessionSet;
            stop.display.sec = 0;
            stop.type = 'session';
            return stop;

        case 'RESET':
            audioElem.pause();
            audioElem.currentTime = 0;
            let reset = Object.assign({}, state);
            reset.display.min = 25;
            reset.display.sec = 0;
            reset.sessionSet = 25;
            reset.breakSet = 5;
            reset.type = 'session';
            return reset;

        default:
            return state;
    }
}