const URL = "https://api.weatherapi.com/v1/current.json?key=8d889b7fdf1e4f41a0062651241403";

export const GetweatherCity = async(city) => {
    const response = await fetch(`${URL}&q=${city}&aqi=yes`);
    return await response.json(); 
}

export const GetweatherLocation = async(lat, lon) => {
    const response = await fetch(`${URL}&q=${lat},${lon}&aqi=yes`);
    return await response.json(); 
}