import React from 'react';
import {Query} from 'react-apollo';
import './App.css';
import {Loader} from "./Loader";
import {USERQUERY} from "../../Queries/user_query";

export const Profiles = ({login}) => (
    <Query query={USERQUERY} variables={{login}}>
        {({data, loading}) => {
            return (loading ? <Loader variables={{loading}}/> :
                data ? <User data={data}/> :
                    <p>Nothing was found</p>);
        }
        }
    </Query>
);

const User = ({data}) => {
    return (
        <div className="card">
            <img src={data.user.avatarUrl} alt="avatar" width="100%"/>
            <h1><a href={data.user.login}>{data.user.login}</a></h1>
            <p className="login"> {data.user.name}</p>
        </div>
    );
};