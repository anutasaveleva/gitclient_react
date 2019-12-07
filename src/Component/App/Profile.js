import gql from "graphql-tag";
import React from "react";
import {Query} from 'react-apollo'
import {Repositories} from "./Reps";
import './App.css';
import Grid from "@material-ui/core/Grid";
import {useParams} from "react-router";
import FollowUser from "./FollowUser";

const reposQuery = gql`
query Myrepositories($first:Int!){
    viewer {
        name
        login
        avatarUrl
        bio
        email   
        repositories(first: $first) {
            edges {
                node {
                    id
                    name
                    stargazers{
                        totalCount
                    }
                    viewerHasStarred
                    isPrivate
                }
            }
        }
    }
}
`;


function DisplayFullprofile(props) {
    const {data} = props
    return (<div>
            <Grid container spacing={0} justify="center">
                <Grid item xs={3}>
                    <div className="card">
                        <div className="UserCard">
                        <img src={data.avatarUrl} alt="avatar" width="100%"/>
                        <h1> {data.name}</h1>
                        <p className="login"> {data.login}</p>
                        <p> {data.email}</p>
                        <p> {data.bio}</p>
                        <FollowUser/>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <h2>Repositories</h2>
                    <Repositories repositories={data.repositories} login={data.login}/>
                </Grid>
            </Grid>
        </div>
    )
}

function Myrepositories() {
    return (
        <Query query={reposQuery} variables={{first: 10}}>
            {({data, loading}) => {
                if (loading) return <p>loading...</p>;
                return (
                    <DisplayFullprofile data={data.viewer}/>)
            }}
        </Query>
    );
}

const userQuery = gql`
query Userrepositories($login:String!){
  user(login: $login) {
    avatarUrl
    bio
    email
    login
    name
    repositories(first: 10) {
      edges {
        node {
          id
          name
          stargazers {
            totalCount
          }
          isPrivate
        }
      }
    }
  }
}
`;

export function UserRepositories() {
    let {login} = useParams();
    return (
        <Query query={userQuery} variables={{login}}>
            {({data, loading}) => {
                console.log(data);
                if (loading) return <p>loading...</p>;
                return (
                    <DisplayFullprofile data={data.user}/>)
            }}
        </Query>
    );
}

export default Myrepositories;