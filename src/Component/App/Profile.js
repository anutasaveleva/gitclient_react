import gql from "graphql-tag";
import React from "react";
import {Query} from 'react-apollo'
import {Repositories} from "./Reps";
import './App.css';
import Grid from "@material-ui/core/Grid";

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
        <Grid container spacing={3}>
            <Grid item xs={5}>
                    <div class="card">
                        <img src={data.viewer.avatarUrl} width="100%"/>
                        <h1> {data.viewer.name}</h1>
                        <p class="login"> {data.viewer.login}</p>
                        <p> {data.viewer.email}</p>
                        <p> {data.viewer.bio}</p>
                    </div>
            </Grid>
            <Grid item xs={5}>
                    <h2>Repositories</h2>
                    <Repositories repositories={data.viewer.repositories}/>
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
                let current = data
                    .viewer.repositories
                    .edges.length;
                return (
                    <DisplayFullprofile data={data}/>)
            }}
        </Query>
    );
}

export default Myrepositories;