import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import resetAction from './actions/resetAction';

class Display extends Component {
  render() {

    const { resetAction } = this.props;

    return (
        <div id='timer-container'>
          <div id='time-left'>5</div>
          <div id='timer-container-buttons'>
            <button id='start_stop' className='control-btn'>
            <i className="fas fa-pause"></i>
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

	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    resetAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);