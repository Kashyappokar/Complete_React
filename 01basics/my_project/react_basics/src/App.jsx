import { useState } from "react";


function App() {
  let [counter, setCounter] = useState(0);
 
  const addValue = () =>{
    if (counter < 20) {
      counter += 1;
      setCounter(counter);
    }    
  }

  const removeValue = () =>{
    if (counter > 0) {
      counter -= 1;
      setCounter(counter);
    }
  }
  return (
    <>
    <center>
         <h1>Click Counter</h1>
          <p>counter: {counter}</p>
         <button onClick={addValue}>Add Value {counter}</button>

         <button onClick={removeValue}>Remove Value {counter} </button>
    </center>
    </>
  )
}

export default App
