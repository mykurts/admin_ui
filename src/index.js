import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/admin-ui/App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import marketingSaga from "./components/admin-ui/sagas/index";
import mainReducer from "./components/admin-ui/redux/reducers/mainReducers";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  mainReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(marketingSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
