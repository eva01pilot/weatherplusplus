import './ForecastComponent.scss'
import {faCloud, faCloudBolt, faCloudRain, faCloudSun, faSun, faSnowflake} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 

const ForecastComponent=(props)=>{
    return(
        <div className="ForecastInfo">
            {props.day===0 &&<h1>Пн</h1>}
            {props.day===1 &&<h1>Вт</h1>}
            {props.day===2 &&<h1>Ср</h1>}
            {props.day===3 &&<h1>Чт</h1>}
            {props.day===4 &&<h1>Пт</h1>}
            {props.day===5 &&<h1>Сб</h1>}
            {props.day===6 &&<h1>Вс</h1>}


            {props.cond==='Солнечно'&&<h1><FontAwesomeIcon icon={faSun} /></h1>}
            {props.cond==='Пасмурно'&&<h1><FontAwesomeIcon icon={faCloud} /></h1>}
            {(props.cond==='Облачно с прояснениями'||props.cond==='Переменная облачность')&&<h1><FontAwesomeIcon icon={faCloudSun} /></h1>}
            {(props.cond==='Дождь'||props.cond==='Небольшой дождь')&&<h1><FontAwesomeIcon icon={faCloudRain} /></h1>}
            <h2>{props.temp} <sup>&#9900;</sup>С</h2>
        </div>
    )

}

export default ForecastComponent;