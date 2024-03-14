import React from 'react'
import { UseWeather } from '../weather/Context'

export const Input = () => {

    const weather = UseWeather();
    // console.log(weather);

    return(
    <div className='input'>
        <input placeholder="Search City" value={weather.searchcity} onChange={(e) => weather.setSearchcity(e.target.value)}/>
    </div>
  )
}
