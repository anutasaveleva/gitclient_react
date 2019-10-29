import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";

function App() {
    const counter = useSelector(state=>state);
    const dispatch = useDispatch();
    return (
        <flex className="mainy">
            <p>helo</p>
            <button id="add-btn-pls" onClick={() => dispatch({
                type:'ADD_COUNTER',
                step:1
            })
            } className="btn btn-success">Add</button>
        <h3 id="grand-total">{counter.num}</h3>
        </flex>
    );
}


export default App;
