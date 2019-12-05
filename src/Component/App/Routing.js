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
function Routing() {
    return (
        <Router>
            <Switch>
                {<Route path="/myprofile" component={Profile} />}
                {/*{<Route path="repository/:id" component={Repository} />}*/}
                {<Route path="/auth" component={Auth}/>}
                <Route path="/" component={HomePage}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}
export default Routing;