import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import CounterContainer from './containers/CounterContainer';
import Buttons from './containers/Buttons';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CounterContainer />
      <Buttons />
    </div>
  </Provider>,
  document.getElementById('root')
);
