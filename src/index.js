import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Auth from './Controllers/Auth/Auth';
import App from './Controllers/App/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ourStore from './Store/authstore';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {Route, Router} from "react-router-dom";

const cache = new InMemoryCache();

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
        authorization: `Bearer ${
            process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
        }`,
    },
});
const rootElement = document.getElementById('root');
const client = new ApolloClient({
    link: httpLink,
    cache,
});

ReactDOM.render(

    <Provider store={ourStore}>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </Provider>
,
    rootElement
);

serviceWorker.unregister();
