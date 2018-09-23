import { START_TIMER } from 'redux-timer';

export const startTimer = () => ({
  type: START_TIMER,
  payload: {
    name: 'myTimer',
    action: 'TICK',
    interval: 1000,
    runImmediately: false
  }
});