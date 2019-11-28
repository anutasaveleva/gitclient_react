import React from 'react';
import gql from 'graphql-tag';
import {Query, Mutation} from 'react-apollo';

export function Home() {
const [searchTerm, setSearchTerm] = React.useState("");
const handleChange = event => {
    setSearchTerm(event.target.value);
};
return (
    <div className="App">
        <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
        />
    </div>)};