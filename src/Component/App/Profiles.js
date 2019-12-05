import React from 'react';
import gql from 'graphql-tag';
import {Query, Mutation} from 'react-apollo';

const userQuery = gql`
query User($login:String!){
    user(login: $login) {
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
        <div>
            <img src={data.user.avatarUrl}/>
            <h1> {data.user.name}</h1>
            <h2> {data.user.login}</h2>
        </div>
    );
}