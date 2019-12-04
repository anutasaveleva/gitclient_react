import React, {useState} from 'react';
import Reps from "./Reps";
import {Profiles} from "./Profiles";

function Search() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [filter, setFilter] = useState(true);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className="App">
            <button onClick={()=>setFilter(!filter)}> {filter? "By users": "By repositories"} </button>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            {filter ?
                <Profiles login={searchTerm}/>:
                <Reps name={searchTerm}/>
            }
        </div>);
}

export default Search