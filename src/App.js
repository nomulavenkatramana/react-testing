import './App.css';
import {useState} from 'react';

function App(props) {
  const [counter,setCounter] =useState(0);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>This is para testing</p>
      <div id="test">welcome to {props.name}</div>
      <div id="init">{counter}</div>
      <button onClick={()=> setCounter(counter+1)}>increment</button>
    </div>
  );
}

export default App;
