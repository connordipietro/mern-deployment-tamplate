import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataContainer from './components/data-container.js'

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <DataContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
