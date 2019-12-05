import React from 'react';
import Auth from "../Auth/Auth";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import HomePage from "./HomePage";
import Profile from "./Profile";
import {Repository} from "./Repository";
function Routing() {
    return (
        <Router>
            <Switch>
                {<Route path="/myprofile" component={Profile} />}
                {<Route path="/repository/:name" component={Repository} />}
                {<Route path="/auth" component={Auth}/>}
                <Route path="/" component={HomePage}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}
export default Routing;