import tickAction from './tickAction';
let timing = null;
let timerOn = false;

export default function timer(status) {
    status = status === 'count' ? 'pause' : status === 'pause' ? 'count' : 'stop';

    if (timerOn === false && status === 'count') {
        timing = setInterval(() => {
          timerOn = true;
          tickAction();
        },1000);
    }
    else {
        clearInterval(timing);
        timerOn = false;
    }

    return {
        type: 'TIMER_ON'
    }
}