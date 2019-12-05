import React from 'react';
import gql from 'graphql-tag';
import {Query, Mutation} from 'react-apollo';
import './App.css';

const userQuery = gql`
query User($login:String!){
    user(login: $login) {
        login
        name
        avatarUrl
        bio
        email  } 
        }
        `;


export const Profiles = ({login}) => (
    <Query query={userQuery} variables={{login}}>
        {({data, loading}) =>{ console.log(data);
            return (loading ? <div>Loading ...</div> :
                data ? <User data={data}/> :
                    <p>Nothing was found</p>);}
        }
    </Query>
);

const User = ({data}) => {
    console.log(data);
    return (
        <div className="card">
            <img src={data.user.avatarUrl} width="100%"/>
            <h1> <a href={data.user.login}>{data.user.name}</a></h1>
            <p className="login"> {data.user.email}</p>
        </div>
    );
}