import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import sessionLengthAction from './actions/sessionLengthAction';
import breakLengthAction from './actions/breakLengthAction';

class LengthControl extends Component {
  render() {

    const { breakLengthAction, breakLength, sessionLengthAction, sessionLength, action } = this.props;

    return (
        <div className='length-container'>
          <section id='session-container'>
            <h2 id='session-label'>Session length</h2>
            <div id='session-set'  className='length-set'>
              <button
                id='session-decrement'
                className='control-btn'
                onClick={(event) => {
                  console.log('action ' + action)
                  sessionLengthAction(event, action);
                } }>
                <i className="fas fa-angle-down"></i>
              </button>
              <div id='session-length' className='length-display'>{sessionLength}</div>
              <button
                id='session-increment'
                className='control-btn'
                onClick={(event) => {
                  console.log('action ' + action)
                  sessionLengthAction(event, action);
                } }>
                <i className="fas fa-angle-up"></i>
              </button>
            </div>
          </section>
          <section id='break-container'>
            <h2 id='break-label'>Break length</h2>
            <div id='break-set' className='length-set'>
              <button
                id='break-decrement'
                className='control-btn'
                onClick={(event) => {
                  breakLengthAction(event);
                } }>
                <i className="fas fa-angle-down"></i>
              </button>
              <div id='break-length' className='length-display'>{breakLength}</div>
              <button
                id='break-increment'
                className='control-btn'
                onClick={(event) => {
                  breakLengthAction(event);
                } }>
                <i className="fas fa-angle-up"></i>
              </button>
            </div>
          </section>
        </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    action: state.active,
    sessionLength: state.sessionLength,
    breakLength: state.breakLength
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    sessionLengthAction,
    breakLengthAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LengthControl);