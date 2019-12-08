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
    return (
        <Router>
            <Switch>
                {<Route path="/myprofile" component={Profile}/>}
                {<Route path="/auth" component={Auth}/>}
                {<Route path="/:login/repository/:name" component={Repository}/>}
                {<Route path="/:login/" component={UserRepositories}/>}
                <Route path="/" component={HomePage}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}

export default Routing;