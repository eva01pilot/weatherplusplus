import Header from './components/Header/Header'
import CurrentWeather from './components/Current/Current.jsx'
import './App.scss';
import {useState,useEffect} from 'react';
import ForecastContainer from './components/Forecast/ForecastContainer';

function App() {

const [coord,setCoord]=useState([]);
const [cTime,setTime]=useState(new Date());
const [input,setInput]=useState('');
const [index,setIndex]=useState('');
const [tempNow,setTempNow]=useState(0);
const [conditionNow,setConditionNow]=useState('');
const [tempForecast,setTempForecast]=useState([]);
const [conditionForecast,setConditionForecast]=useState([]);
const [city,setCity]=useState('');

const urlCurrent='https://api.openweathermap.org/data/2.5/weather?';
const urlForecast='https://api.openweathermap.org/data/2.5/forecast?';
const apiKey='8b62b00ad099c72c68862567409bf0fe';
const getDays=()=>{
  const date=new Date();
  return [date.getDay(), date.getDay()+1, date.getDay()+2]
}

useEffect(() =>{ 
    setInterval(() =>{
      setTime(new Date());
    },60000);
    console.log(getDays());
    navigator.geolocation.watchPosition((position)=>{
      setCoord([position.coords.latitude, position.coords.longitude]);
    })
    console.log(coord);
    !index?fetch(urlCurrent+'lat='+coord[0]+'&lon='+coord[1]+'&appid='+apiKey+'&units=metric&lang=ru')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data);
      setTempNow(Math.round(data.main.temp));
      setConditionNow(data.weather[0].description.charAt(0).toUpperCase()
      +data.weather[0].description.slice(1));
      setCity(data.name)
    }):fetch(urlCurrent+'zip='+index+',ru&appid='+apiKey+'&units=metric&lang=ru')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data);
      setTempNow(Math.round(data.main.temp));
      setConditionNow(data.weather[0].description.charAt(0).toUpperCase()
      +data.weather[0].description.slice(1));
      setCity(data.name)
    })
    
    
    !index?fetch(urlForecast+'lat='+coord[0]+'&lon='+coord[1]+'&appid='+apiKey+'&units=metric&lang=ru')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data);
      setTempForecast([Math.round(data.list[7].main.temp),Math.round(data.list[15].main.temp),
        Math.round(data.list[23].main.temp)]);
      setConditionForecast([
        data.list[7].weather[0].description.charAt(0).toUpperCase()
        +data.list[7].weather[0].description.slice(1),
        data.list[15].weather[0].description.charAt(0).toUpperCase()
        +data.list[15].weather[0].description.slice(1),
        data.list[23].weather[0].description.charAt(0).toUpperCase()
        +data.list[23].weather[0].description.slice(1),
      ])
    }):
    fetch(urlForecast+'zip='+index+',ru&appid='+apiKey+'&units=metric&lang=ru')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data);
      setTempForecast([Math.round(data.list[7].main.temp),Math.round(data.list[15].main.temp),
        Math.round(data.list[23].main.temp)]);
      setConditionForecast([
        data.list[7].weather[0].description.charAt(0).toUpperCase()
        +data.list[7].weather[0].description.slice(1),
        data.list[15].weather[0].description.charAt(0).toUpperCase()
        +data.list[15].weather[0].description.slice(1),
        data.list[23].weather[0].description.charAt(0).toUpperCase()
        +data.list[23].weather[0].description.slice(1),
      ])
    })

  },[coord,tempNow,conditionNow, ...tempForecast,...conditionForecast,index])
  
  const handleSubmit=e=>{
    e.preventDefault();
    setIndex(input);
    console.log(index);
    setInput('');
    
  }
  const handleInput=e=>{
    setInput(e.target.value);
    console.log(input);
    
  }

return (
    <main className="App">
      <Header value={input}  onClick={handleSubmit} onChange={handleInput}/>
      <div className="Appcontainer">
        <CurrentWeather city={city} time={cTime} temp={tempNow} condition={conditionNow}/>
        <ForecastContainer temp={tempForecast} cond={conditionForecast} day={getDays()}/>
      </div>
    </main>
  );
}

export default App;
