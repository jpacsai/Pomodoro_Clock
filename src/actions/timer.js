import tickAction from './tickAction';
let timing = null;
let timerOn = false;

export default function timer(status) {
    status = status === 'count' ? 'pause' : status === 'pause' ? 'count' : 'stop';

    if (timerOn === false && status === 'count') {
        /*timing = setInterval(() => {
          timerOn = true;
            return (dispatch) => {
                
                dispatch(tickAction());
            }
        },1000);*/
        return (dispatch) => {
            clearInterval(timing);
            timing = setInterval(() => dispatch(tick()), 1000);
            dispatch({ type: 'TIMER_START' });
            dispatch(tick());
          }
    }
    else {
        clearInterval(timing);
        timerOn = false;

        return {
            type: 'TIMER_STOP'
        }
    }

    
}

function tick() {
    return {
        type: 'TICK'
    }
}