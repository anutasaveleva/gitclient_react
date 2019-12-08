import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Controllers/App/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ourStore from './Store/authstore';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {Header} from "./Component/Header/Header";

const cache = new InMemoryCache();

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
        authorization: `Bearer ${
            localStorage.getItem('currentUser')
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
            <Header/>
            <App/>
        </ApolloProvider>
    </Provider>
,rootElement
);

serviceWorker.unregister();
