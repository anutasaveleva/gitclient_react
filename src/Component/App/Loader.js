import {ClipLoader} from "react-spinners";
import React from "react";
import {useParams} from "react-router";

export const Loader = () => {
    let {loading} = useParams();
    const style = {
        paddingTop: '15px',
        justifySelf: 'center'
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