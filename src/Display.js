import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Display extends Component {
  render() {
    return (
        <div id='timer-container'>
          <h2 id='timer-label'>Session</h2>
          <div id='time-left'></div>
          <button id='start_stop'></button>
          <button id='reset'></button>
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

	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);