import './TimeDisplay.scss';
import React from 'react';
import {useEffect} from 'react';

const TimeDisplay = (props)=>{
    const getTime=()=>{
        return props.time.getHours().toString()+':'+
            props.time.getMinutes().toString()
    }
    useEffect(()=>{
        getTime()}
    )
    
    return(
        <div className="Time">
            <h1>{getTime()}</h1>
            <h2>{props.time.toLocaleDateString()}</h2>
            <h2>{props.city}</h2>
        </div>
    )
}

export default TimeDisplay;