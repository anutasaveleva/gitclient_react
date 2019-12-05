import {useParams} from "react-router";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import gql from "graphql-tag";
import {Query} from "@apollo/react-components";
import React from "react";
import Grid from "@material-ui/core/Grid";
import './App.css';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ArchiveIcon from '@material-ui/icons/Archive';

const GET_REPOSITORY = gql`
  query Repos($name: String!) {
    repository(owner:"anutasaveleva", name: $name) {
            id
            url
            viewerHasStarred
            isPrivate
            isArchived
            primaryLanguage {
                name
            }
            stargazers {
                totalCount
            }
            description
        }
  }
`;
function DisplayRepos(props) {
    const {data} = props;
    console.log(data);
    return (<div>
                    <div class="card">
                        {data.repository.isPrivate && <LockIcon/> }
                        {!data.repository.isPrivate && <LockOpenIcon/> }
                        {data.repository.isArchived && <ArchiveIcon/> }
                        <h3>{data.repository.name} </h3>
                        <p> <a href={data.repository.url}> Link on GitHub</a></p>
                        <p class="login"> {data.repository.stargazers.totalCount} stars</p>
                        <p> Language:{data.repository.primaryLanguage.name}</p>
                        {data.repository.description}
                        </div>
        </div>
    )
}
export const Repository = () => {
    let {name} = useParams();
    return (<Query query={GET_REPOSITORY} variables={{name}}>
        {({data, loading}) => {
            return (loading ? <div>Loading ...</div> :
                data ? <DisplayRepos data={data}/> :
                    <p>Nothing was found</p>);
        }
        }
    </Query>);
};