import {useParams} from "react-router";
import {Query} from "@apollo/react-components";
import React from "react";
import './App.css';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ArchiveIcon from '@material-ui/icons/Archive';
import {Loader} from "./Loader";
import {GET_REPOSITORY} from "../../Queries/get_repository";



function DisplayRepos(props) {
    const {data} = props;
    return (<div className="card">
            <div className="RepositoryCard">
                <h1>{data.repository.name}</h1>
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
            return (loading ? <Loader variables={{loading}}/> :
                data ? <DisplayRepos data={data}/> :
                    <p>Nothing was found</p>);
        }
        }
    </Query>);
};