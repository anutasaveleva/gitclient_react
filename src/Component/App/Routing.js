import React from 'react';
import Auth from "../Auth/Auth";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect, useRouteMatch
} from "react-router-dom";
import HomePage from "./HomePage";
import Profile, {UserRepositories} from "./Profile";
import {Repository} from "./Repository";

function Routing() {
    const currentUser = localStorage.getItem('token');
   // const {path} = useRouteMatch();
    return (
        <Router>
            <Switch>
                {currentUser && <Route path="/myprofile" component={Profile}/>}
                {<Route path="/auth" component={Auth}/>}
                {currentUser && <Route path="/:login/repository/:name" component={Repository}/>}
                {currentUser && <Route path="/:login/" component={UserRepositories}/>}
                {currentUser && <Route path="/" component={HomePage}/>}
                <Redirect to="/auth"/>
            </Switch>
        </Router>
    )
}

export default Routing;