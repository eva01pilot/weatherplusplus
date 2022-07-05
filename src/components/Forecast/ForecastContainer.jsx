import {useState,useEffect} from 'react';
import './ForecastContainer.scss';
import ForecastComponent from './ForecastComponent/ForecastComponent';

const ForecastContainer = (props)=>{
    return(
        <div className="container">
            <ForecastComponent day={props.day[0]}  temp={props.temp[0]} cond={props.cond[0]} />
            <ForecastComponent day={props.day[1]}  temp={props.temp[1]} cond={props.cond[1]}/>
            <ForecastComponent day={props.day[2]}  temp={props.temp[2]} cond={props.cond[2]}/>
            
        </div>
    )
}

export default ForecastContainer;