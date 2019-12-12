import {ClipLoader} from "react-spinners";
import React from "react";
import {useParams} from "react-router";

export const Loader = () => {
    let {loading} = useParams();
    const style = {textAlign: 'center',
    padding: '15px'
    };
    return (
        <div style={style}>
            <ClipLoader
                sizeUnit={"px"}
                size={50}
                color={'#123abc'}
                loading={loading}
            /></div>
    )
}