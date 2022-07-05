import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faCloud, faCloudBolt, faCloudRain, faCloudSun, faSun, faSnowflake} from '@fortawesome/free-solid-svg-icons';
import './CurrentWeather.scss'
const CurrWeather = (props)=>{
    return (
        <>
        <div className="CurrTemp"> 
            <h1>{props.temp}<sup>&#9900;</sup>C</h1>
        </div>
        <div className="CurrConditions">
            {props.condition==='Солнечно'&&<h1><FontAwesomeIcon icon={faSun} /></h1>}
            {props.condition==='Пасмурно'&&<h1><FontAwesomeIcon icon={faCloud} /></h1>}
            {(props.condition==='Облачно с прояснениями'||props.condition==='Переменная облачность')&&<h1><FontAwesomeIcon icon={faCloudSun} /></h1>}
            {(props.condition==='Дождь'||props.condition==='Небольшой дождь')&&<h1><FontAwesomeIcon icon={faCloudRain} /></h1>}
            <h2>{props.condition}</h2>
        </div>
        </>
    )
}

export default CurrWeather;