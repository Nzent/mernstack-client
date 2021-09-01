import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom'
import './styles/global.css'
import 'antd/dist/antd.css';
import App from './app'
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import reducers from './reducers/'

const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))