import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LengthControl extends Component {
  render() {
    return (
        <div className='length-container'>
          <section id='break-container'>
            <h2 id='break-label'>Break length</h2>
            <div id='break-set' className='length-set'>
              <button id='break-decrement' className='length-control-btn'>
                <i class="fas fa-angle-down"></i>
              </button>
              <div id='break-length' className='length-display'>5</div>
              <button id='break-increment' className='length-control-btn'>
                <i class="fas fa-angle-up"></i>
              </button>
            </div>
          </section>
          <section id='session-container'>
            <h2 id='session-label'>Session length</h2>
            <div id='session-set'  className='length-set'>
              <button id='session-decrement' className='length-control-btn'>
                <i class="fas fa-angle-down"></i>
              </button>
              <div id='session-length' className='length-display'>25</div>
              <button id='session-increment' className='length-control-btn'>
                <i class="fas fa-angle-up"></i>
              </button>
            </div>
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