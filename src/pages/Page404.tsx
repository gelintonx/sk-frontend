import React from "react";
import gif from '../assets/404.gif';
import '../styles/Error404.css';

export default function Error404Page () {

    return(
        <div className='error404' >
            <img src={gif} alt='loading' />
        </div>
    );
}