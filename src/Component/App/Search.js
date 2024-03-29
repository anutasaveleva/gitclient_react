import React, {useState} from 'react';
import Reps from "./Reps";
import {Profiles} from "./Profiles";
import './App.css';

function Search() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [filter, setFilter] = useState(true);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    return (

        <div>
            <div className="Search">
                <button className="button"
                        onClick={() => setFilter(!filter)}> {filter ? "By users" : "By repositories"} </button>
                <input
                    type="text"
                    className="searchTerm"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />

            <div className="App">
                {filter ?
                    <Profiles login={searchTerm}/> :
                    <Reps quer={searchTerm}/>
                }
            </div></div>
        </div>
    );
}

export default Search