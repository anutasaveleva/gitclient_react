import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Auth from './Controllers/Auth/Auth';
import App from './Controllers/App/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ourStore from './Store/authstore';
import { Switch, Link, Route, Router } from 'react-router-dom'


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={ourStore}>
        <Auth/>
    </Provider>,
    rootElement
);

serviceWorker.unregister();
