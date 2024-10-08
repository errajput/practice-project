
import { useState } from 'react'

import './App.css'

function App() {
 let [counter, setCounter]=useState(15)

  // let counter = 5
  const addValue= () => {
    if(counter < 20 ){

      counter =   counter+1
      setCounter(counter)
      // console.log("clicked  ", counter);
    }
  }
  const removeValue = () =>{
    if(counter >   0){
      
      setCounter(counter-1)
    }
  }
  return(
    <>
    <h1>Counter Code</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>add value</button>
    <br />
    <button 
    onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
