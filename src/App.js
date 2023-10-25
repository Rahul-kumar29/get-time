
import './App.css';
import { useState } from 'react';

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const[cTime, setTime] = useState(newTime);

  let updateTime = () =>{
    newTime = new Date().toLocaleTimeString();
    setTime (newTime);
  }
  return (
    <>
    <div class="container mt-3 main">
      <h1>{newTime}</h1>
      <button type="button" class="btn btn-primary" onClick={updateTime}>Get Time</button>
      </div>
    </>
  );
}

export default App;
