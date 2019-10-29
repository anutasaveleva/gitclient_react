import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reduce from './reducers';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import {addCounter, getValue} from "./actions";

const store = createStore(reduce);
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

serviceWorker.unregister();
