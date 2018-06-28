import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as CounterActions from '../actions';

import Increment from '../components/Increment.js';
import Decrement from '../components/Decrement.js';
import IncrementFive from '../components/IncrementFive';
import Reset from '../components/Reset';

class Buttons extends Component {
  render() {
    return (
      <div>
        <Increment incrementCounter={this.props.incrementCounter} />
        <Decrement decrementCounter={this.props.decrementCounter} />
        <IncrementFive incrementFiveCounter={this.props.incrementFiveCounter} />
        <Reset resetCounter={this.props.resetCounter} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // actions: bindActionCreators(CounterActions, dispatch)
  // incrementCounter,
  incrementCounter: () => { dispatch(CounterActions.incrementCounter()) },
  decrementCounter: () => { dispatch(CounterActions.decrementCounter()) },
  incrementFiveCounter: () => { dispatch(CounterActions.incrementFiveCounter()) },
  resetCounter: () => { dispatch(CounterActions.resetCounter()) },
});

export default connect(
  null,
  mapDispatchToProps
)(Buttons)