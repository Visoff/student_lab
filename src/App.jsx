import React from 'react';
import axios from "axios"
import { useState } from 'react';

function App() {
  const [data, setdata] = useState("")
  
  axios.post("https://visoff.ru/user/get/by/id").then(res => {setdata(JSON.stringify(res.data))})

  return (
    <div className="App">
      {data}
    </div>
  )
}

export default App;
