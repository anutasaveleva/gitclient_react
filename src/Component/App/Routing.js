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
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
            <Switch>
                {<Route path="/profile" component={Profile} />}
                {/*<Route path="repository/:id" component={Repository} />*/}
                <Route path="/auth">
                    <Auth/>
                </Route>
                <Route path="/" component={HomePage}/>
            </Switch>
        </Router>
    )
}
export default Routing;