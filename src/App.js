import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LengthControl from './LengthControl';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <h1 className='title'>Pomodoro Clock</h1>
        <hr />
        <LengthControl />
        <Display />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
