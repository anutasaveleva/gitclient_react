import React from 'react';
import Search from "./Search";
import {SButton} from "../Auth/style";
import {Redirect} from "react-router-dom";
import './App.css';

export default function Home()  {
    const currentUser = localStorage.getItem('currentUser');
return (
    currentUser ? (
        <div><div className="wrap">
            <div className="search">
            <Search class="searchTerm"/>
        </div>
    </div>
            <SButton onClick={logOut}>Log out</SButton>
        </div>) : <Redirect to='/auth'/>
)
};


function logOut() {
    localStorage.removeItem('currentUser');
    window.location.reload(true);
}