
import './App.css'
import { Card } from './components/Card';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { UseWeather } from './weather/Context';
import { useEffect } from 'react';


function App() {

  const weather = UseWeather();
  // console.log(weather);

  useEffect(() => {
     weather.fetchLocation();
  }, []);

  return (
    <>
      <div>
        <h1>Weather Forecast</h1>
        <Input placeholder="Enter city"/>
        <Button onClick={weather.fetchdata} value="Search"/>
        <Card/>
        <Button onClick={weather.refreshData}value="Refresh"/>
      </div>
    </>
  )
}

export default App
