import React from 'react';
import gql from 'graphql-tag';
import {Query, Mutation} from 'react-apollo';
import Search from "./Search";
import {SButton} from "../Auth/style";
import {Redirect} from "react-router-dom";

export default function Home()  {
    const currentUser = localStorage.getItem('currentUser');
return (
    currentUser ? (
        <div className="Home">
        <div>
            <Search/>
            <SButton type="ghost"
                     onClick={logOut}>Log out</SButton>
        </div>
    </div>) : <Redirect to='/auth'/>
)
};


function logOut() {
    localStorage.removeItem('currentUser');
    window.location.reload(true);
}