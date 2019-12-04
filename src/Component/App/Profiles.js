import React from 'react';
import gql from 'graphql-tag';
import {Query, Mutation} from 'react-apollo';

const userQuery = gql`
query User($login:String!){
    viewer(login: $login) {
        name
        avatarUrl
        bio
        email  } 
        }
        `;


export const Profiles = ({login}) => (
    <Query query={userQuery} variables={{login}}>
        {({data, loading}) =>
            loading ? <div>Loading ...</div> :
                data ? <Profile user={data}/> :
                    <p>Nothing was found</p>
        }
    </Query>
);

export class Profile extends React.Component {
   render() {
        return (
            <User
                data={this.props.data}
            />
        );
    }
}

const User = ({data}) => (
<div>
        <img src={data.viewer.avatarUrl}/>
        <h1> {data.viewer.name}</h1>
        <h2> {data.viewer.login}</h2>
    </div>
);
