import { STOP_TIMER } from 'redux-timer';

export const stopTimer = () => ({
  type: STOP_TIMER,
  payload: {
    name: 'myTimer'
  }
});