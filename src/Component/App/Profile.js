import React from "react";
import {Query} from 'react-apollo'
import {Repositories} from "./Reps";
import './App.css';
import Grid from "@material-ui/core/Grid";
import {useParams} from "react-router";
import {FollowUser, UnfollowUser} from "./FollowUser";
import {Loader} from "./Loader";
import {MY_REPOSITORIES} from "../../Queries/my_repositories";
import {USERQUERY} from "../../Queries/user_query";

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
                            {!data.isViewer && !data.viewerIsFollowing && <FollowUser id={data.id}/>}
                            {!data.isViewer && data.viewerIsFollowing && <UnfollowUser id={data.id}/>}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <h2>Repositories</h2>
                    <Repositories repositories={data.repositories} login={data.login}/>
                </Grid>
            </Grid>
        </div>
    )
}

function Myrepositories() {
    return (
        <Query query={MY_REPOSITORIES} variables={{first: 10}}>
            {({data, loading}) => {
                if (loading) return <Loader variables={{loading}}/>;
                return (
                    <DisplayFullprofile data={data.viewer}/>)
            }}
        </Query>
    );
}

export function UserRepositories() {
    let {login} = useParams();
    return (
        <Query query={USERQUERY} variables={{login}}>
            {({data, loading}) => {
                if (loading) return <Loader variables={{loading}}/>;
                return (
                    <DisplayFullprofile data={data?.user}/>)
            }}
        </Query>
    );
}

export default Myrepositories;