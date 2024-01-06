import {useState} from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);

  // let counter = 15;
  const addValue =()=>{
    // console.log('clicked',counter)
    // counter= counter +   1; 
    if(counter<20){
      counter =  counter  +  1;
      setCounter(counter);
    }
  }  

  const removeValue=()=>{
    console.log('clicked',counter);
    if(counter>0){
      counter -=1;
      setCounter(counter);
    }
  }
  return (
    <>
      <div>
        <h1>Me And React</h1>
        <h2>Counter Value:Counter Value:{counter}</h2>
        <button
        onClick={addValue}>Add Value</button>
        <br />
        <button
        onClick={removeValue}>Remove Value</button>
      </div>
      {/*<p>{counter}</p>*/}
      <footer>{counter}</footer>
    </>
  )
}

export default App
