import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {createStore,applyMiddleware} from 'redux';
import thunkMiddileware from 'redux-thunk';
import {Provider} from 'react-redux';
import HomeImgSlider from '../src/Service/Reducers/index'
const store = createStore(HomeImgSlider,applyMiddleware(thunkMiddileware))
ReactDOM.render(
  <Provider store={store} >
  <React.StrictMode>
    <Router>
    <App />
  </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
