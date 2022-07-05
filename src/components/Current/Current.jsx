import React from 'react';
import TimeDisplay from './TimeDisplay/TimeDisplay';
import CurrWeather from './CurrentWeather/CurrentWeather';
import './Currrent.scss';

const CurrentWeather=(props)=>{


    return(
        <div className="Current">
            <TimeDisplay time={props.time} city={props.city}/>
            <CurrWeather temp={props.temp} condition={props.condition}/>
        </div>
    )

}

export default CurrentWeather;