import gql from "graphql-tag";
import React, {Component} from "react";
import RemoveStar from "./RemoveStar";
import AddStar from "./AddStar";
import { Query } from 'react-apollo'
import {Repositories} from "./Reps";

const reposQuery = gql`
query Myrepositories($first:Int!){
    viewer {
        name
        login
        avatarUrl
        bio
        repositories(first: $first) {
            edges {
                node {
                    id
                    name
                    stargazers{
                        totalCount
                    }
                    viewerHasStarred
                }
            }
        }
    }
}
`


function Displayrepos(props) {
    const {data} = props
    return (
        <div>
            <img src={data.viewer.avatarUrl}/>
            <h1> {data.viewer.name}</h1>
            <h2> {data.viewer.login}</h2>

            <h2>Repositories</h2>
            <Repositories repositories={data.viewer.repositories}/>

        </div>
    )
}

function Myrepositories() {
    return (
            <Query query={reposQuery} variables={{ first: 10 }}>
                {({ data, loading }) => {
                    if (loading) return <p>loading...</p>;
                    let current = data
                        .viewer.repositories
                        .edges.length;
                    return (
                        <Displayrepos data={data}/>)
                }}
            </Query>
        );
}

export default Myrepositories;