import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import resetAction from './actions/resetAction';
import activeAction from './actions/activeAction';
import stopAction from './actions/stopAction';

let timing = null;

class Display extends Component {
  render() {

    const { resetAction, activeAction, stopAction, active, display, sessionLength, breakLength } = this.props;

    const min = display[0][0];
    const sec = display[0][1];

    if (active === 'count') {
      timing = setInterval(() => {
        console.log('hello')
      },1000);
    }
    else {
      clearInterval(timing);
    }

    return (
        <div id='timer-container'>
          <div id='time-left'>{(min < 10 ? '0' + min : min) + ' : ' + (sec < 10 ? '0' + sec : sec)}</div>
          <div id='timer-container-buttons'>
            <button
              id='start_stop'
              className='control-btn'
              onClick={() => {
                activeAction();
              } }>
            { active === 'count' ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i> }
            </button>
            <button
              id='stop'
              className='control-btn'
              onClick={() => {
                stopAction(sessionLength, breakLength);
              } }>
              <i className="fas fa-stop"></i>
            </button>
            <button
              id='reset'
              className='control-btn'
              onClick={() => {
                resetAction();
              } }>
              <i className="fas fa-redo"></i>
            </button>
          </div>
          <h2 id='timer-label'>Session</h2>
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
    stopAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);