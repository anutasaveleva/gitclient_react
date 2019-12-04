import React from 'react';
import Reps from "./Reps";


function Search() {
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
            <Reps name={searchTerm}/>
        </div>);
}

export default Search