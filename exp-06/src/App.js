import {useState,useRef} from 'react';

function MyComponent(){
  const[timer,setTimer]=useState(0);
  const[isRunning,setIsRunning]=useState(false)
  const intervalRef=useRef(null)

const startTimer = () => {
  if (!isRunning) {
  setIsRunning (true);
  intervalRef.current = setInterval(() => {
  setTimer (prevTimer => prevTimer + 1);
  }, 1000);
};
}
const stopTimer = () => {
  if
  (isRunning) {
  setIsRunning(false);
  clearInterval(intervalRef.current);
  }}
  const resetTimer = () => {
  setIsRunning(false);
  clearInterval (intervalRef.current); setTimer (0);
  }

  return(
    <div>
      <h1>Timer: {timer} seconds</h1>
    <button onClick={startTimer} disabled={isRunning}>Start</button>
    <button onclick={stopTimer} disabled={!isRunning}>Pause</button>
    < button onClick={resetTimer}>Reset</button>
    </div>
  )
}

function App(){
  return (
    <div className='App'>
      <MyComponent/>
    </div>
  )
}
  

 
export default App;
