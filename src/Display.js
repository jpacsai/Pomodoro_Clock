import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import resetAction from './actions/resetAction';
import activeAction from './actions/activeAction';
import stopAction from './actions/stopAction';
import timer from './actions/timer';

class Display extends Component {
  render() {

    const { resetAction, activeAction, stopAction, active, display, sessionLength, breakLength, timer } = this.props;

    const min = display.display.min;
    const sec = display.display.sec;

    return (
        <div id='timer-container'>
          <div id='time-left'>{(min < 10 ? '0' + min : min) + ' : ' + (sec < 10 ? '0' + sec : sec)}</div>
          <div id='timer-container-buttons'>
            <button
              id='start_stop'
              className='control-btn'
              onClick={() => {
                activeAction();
                const status = active === 'count' ? 'count' : 'pause';
                timer(status);
              } }>
            { active === 'count' ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i> }
            </button>
            <button
              id='stop'
              className='control-btn'
              onClick={() => {
                stopAction(sessionLength, breakLength);
                timer('stop');
              } }>
              <i className="fas fa-stop"></i>
            </button>
            <button
              id='reset'
              className='control-btn'
              onClick={() => {
                resetAction();
                timer('stop');
              } }>
              <i className="fas fa-redo"></i>
            </button>
          </div>
          <h2 id='timer-label'>{display.type}</h2>
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
    timer
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);