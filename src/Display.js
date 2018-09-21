import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import resetAction from './actions/resetAction';
import activeAction from './actions/activeAction';

class Display extends Component {
  render() {

    const { resetAction, activeAction, active, display } = this.props;

    return (
        <div id='timer-container'>
          <div id='time-left'>{(display[0] < 10 ? '0' + display[0] : display[0]) + ' : ' + (display[1] < 10 ? '0' + display[1] : display[1])}</div>
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
              className='control-btn'>
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
    display: state.display
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    resetAction,
    activeAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);