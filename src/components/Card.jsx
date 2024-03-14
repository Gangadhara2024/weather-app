import React from 'react'
import { UseWeather } from '../weather/Context'

export const Card = () => {
    const weather = UseWeather();
  return (
    <div className='card'>
        <img src={weather?.data?.current?.condition?.icon}/>
        <h2>{weather.data?.current?.temp_c}.C</h2>
        <h5>{weather.data?.location?.name} , {weather.data?.location?.region} , {weather.data?.location?.country} </h5>
    </div>
  )
}
