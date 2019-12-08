import {useParams} from "react-router";
import gql from "graphql-tag";
import {Query} from "@apollo/react-components";
import React from "react";
import './App.css';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ArchiveIcon from '@material-ui/icons/Archive';

const GET_REPOSITORY = gql`
  query Repos($name: String!, $login: String!) {
    repository(owner:$login, name: $name) {
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
            owner {
                login
                avatarUrl
            }
        }
  }
`;

function DisplayRepos(props) {
    const {data} = props;
    return (<div className="card">
            <div className="RepositoryCard">
                <p className="login"> {data.repository.owner.login}</p>
                {data.repository.isPrivate && <LockIcon/>}
                {!data.repository.isPrivate && <LockOpenIcon/>}
                {data.repository.isArchived && <ArchiveIcon/>}
                <p><a href={data.repository.url}> Link on GitHub</a></p>
                <p className="login"> {data.repository.stargazers.totalCount} stars</p>
                <p> Language:{data.repository.primaryLanguage && data.repository.primaryLanguage.name}</p>
                {data.repository.description}

            </div>
        </div>
    )
}

export const Repository = () => {
    let {login, name} = useParams();
    return (<Query query={GET_REPOSITORY} variables={{login, name}}>
        {({data, loading}) => {
            return (loading ? <div>Loading ...</div> :
                data ? <DisplayRepos data={data}/> :
                    <p>Nothing was found</p>);
        }
        }
    </Query>);
};