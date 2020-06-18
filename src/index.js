import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import App from './component/App';

import rootReducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
          <Provider store={ createStoreWithMiddleware( rootReducer ) }>
              <App />
          </Provider>, document.getElementById('root'))


