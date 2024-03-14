import React, { createContext, useContext, useState } from 'react'
import { GetweatherCity } from '../api';
import { GetweatherLocation } from '../api';

const Weathercontext = createContext();

export const UseWeather = () => {
    return useContext(Weathercontext);
}
export const Context = (props) => {

    const [data, setData] = useState();
    const [searchcity, setSearchcity] = useState();


    const fetchdata = async() => {
        const response = await GetweatherCity(searchcity);
        setData(response);
    }

    const refreshData = async() => {
        const response = await GetweatherCity(searchcity);
        setData("");
    }

    const fetchLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            GetweatherLocation(position.coords.latitude, position.coords.longitude).then((data) => setData(data));
        });
    }

  return (
    <div>
         <Weathercontext.Provider value={{data, searchcity, fetchdata, setSearchcity, fetchLocation, refreshData}}>
            {props.children}
         </Weathercontext.Provider>
    </div>
  )
}

 