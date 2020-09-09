import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import CreateAPOD from './createAPOD'
import ChangeDate from './changeDate'

function App() {
  const [ date, setDate ] = useState('2020-09-09')
  const [ data, setData ] = useState([])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=O2nNqicMMW7DTS1PJl6bcVAVxgapiDutk34wwQO3&date=${date}`)
    .then((apod) =>{
      setData(apod.data)
    })
    .catch((err) => {
      console.log('we messed up: ', err)
      setDate('1999-03-18')
    })
  }, [date])
  return (
    <div className="App">
      <ChangeDate setDate={setDate}/>
      <CreateAPOD data={ data } />
    </div>
  );
}

export default App;
