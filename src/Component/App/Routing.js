import React from 'react';
import Auth from "../Auth/Auth";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import HomePage from "./HomePage";
import Profile, {UserRepositories} from "./Profile";
import {Repository} from "./Repository";

function Routing() {
    const currentUser = localStorage.getItem('token');
   const path  = 'https://anutasaveleva.github.io/gitclient_react';
    return (
        <Router>
            <Switch>
                {currentUser && <Route path={`${path}/myprofile`} component={Profile}/>}
                {<Route path={`${path}/auth`} component={Auth}/>}
                {currentUser && <Route path={`${path}/:login/repository/:name`} component={Repository}/>}
                {currentUser && <Route path={`${path}/:login/`} component={UserRepositories}/>}
                {currentUser && <Route path={`${path}`} component={HomePage}/>}
                <Redirect to={`${path}/auth`}/>
            </Switch>
        </Router>
    )
}

export default Routing;