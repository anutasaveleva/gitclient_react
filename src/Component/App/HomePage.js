import React from 'react';
import Search from "./Search";
import {Redirect} from "react-router-dom";
import './App.css';
import gql from "graphql-tag";
import {Loader} from "./Loader";
import {Query} from "@apollo/react-components";

const VALIDATION_QUERY = gql`
    {
        viewer {
            id
        }
    }
`;

export default function Home() {
    return (
        <Query query={VALIDATION_QUERY}>
            {({data, loading}) => {
                return (loading ? <Loader variables={{loading}}/> :
                        data ? <div>
                                <div className="wrap">
                                    <div className="search">
                                        <Search class="searchTerm"/>
                                    </div>
                                </div>
                            </div> :
                            <div>
                                {localStorage.removeItem('token')}
                                <Redirect to='/auth'/>
                            </div>
                );
            }
            }
                </Query>
                );
                };

