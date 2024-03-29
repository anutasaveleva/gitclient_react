import React from 'react';
import Search from "./Search";
import {Redirect} from "react-router-dom";
import './App.css';


export default function Home() {
    const currentUser = localStorage.getItem('token');
    return ( currentUser?
        <div>
            <div className="wrap">
                <div className="search">
                    <Search class="searchTerm"/>
                </div>
            </div>
        </div> : <Redirect to='/auth'/>
    );
};

