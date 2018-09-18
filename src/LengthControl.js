import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LengthControl extends Component {
  render() {
    return (
        <div className='length-container'>
          <section id='break-container'>
            <h2 id='break-label'>Break length</h2>
            <div id='break-set'>
              <button id='break-increment'></button>
              <button id='break-decrement'></button>
            </div>
            <div id='break-length'>5</div>
          </section>
          <section id='session-container'>
            <h2 id='session-label'>Session length</h2>
            <div id='session-set'>
              <button id='session-increment'></button>
              <button id='session-decrement'></button>
            </div>
            <div id='session-length'>25</div>
          </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(LengthControl);