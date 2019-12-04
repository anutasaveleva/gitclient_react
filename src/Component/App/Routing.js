import React from 'react';
import Auth from "../Auth/Auth";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "./HomePage";
import Profile from "./Profile";
function Routing() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/auth">Log In</Link>
                </li>
                <li>
                    <Link to="/repositories">Repositories</Link>
                </li>
                <li>
                    <Link to="/myprofile">Profile</Link>
                </li>
            </ul>
            <Switch>
                {<Route path="/myprofile" component={Profile} />}
                {/*<Route path="repository/:id" component={Repository} />*/}
                {<Route path="/auth" component={Auth}/>}
                <Route path="/" component={HomePage}/>
            </Switch>
        </Router>
    )
}
export default Routing;