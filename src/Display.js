import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import resetAction from './actions/resetAction';
import activeAction from './actions/activeAction';
import stopAction from './actions/stopAction';
import { startTimer } from './actions/startTimer';
import { stopTimer } from './actions/stopTimer';

class Display extends Component {
  render() {

    const { resetAction, activeAction, stopAction, active, display, sessionLength, breakLength, startTimer, stopTimer } = this.props;

    const min = display.display.min;
    const sec = display.display.sec;

    return (
        <div id='timer-container'>
          <h2 id='timer-label'>{display.type}</h2>
          <div id='time-left'>{(min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)}</div>
          <div id='timer-container-buttons'>
            <button
              id='start_stop'
              className='control-btn'
              onClick={() => {
                activeAction();
                const status = active === 'count' ? 'count' : 'pause';
                if (status === 'pause') {
                  startTimer();
                }
                else {
                  stopTimer();
                }
              } }>
            { active === 'count' ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i> }
            </button>
            <button
              id='stop'
              className='control-btn'
              onClick={() => {
                stopAction(sessionLength, breakLength);
                stopTimer();
              } }>
              <i className="fas fa-stop"></i>
            </button>
            <button
              id='reset'
              className='control-btn'
              onClick={() => {
                resetAction();
                stopTimer();
              } }>
              <i className="fas fa-redo"></i>
            </button>
          </div>
          <audio className='clip' id='beep' src='https://res.cloudinary.com/jutzee/video/upload/v1537693352/FCC-pomodoro%20clock/alarm_beep.mp3' preload="auto"></audio>
        </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    active: state.active,
    display: state.display,
    sessionLength: state.sessionLength,
    breakLength: state.breakLength
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    resetAction,
    activeAction,
    stopAction,
    startTimer,
    stopTimer
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);