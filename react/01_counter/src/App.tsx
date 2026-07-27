import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(10)
  function increase() {
    if (count < 100) {
      setCount(count + 1)
    }
  }
  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function reset() {
    setCount(0)
  }
  function set(){
    setCount(value)
  }
  function setNewValue(e: React.ChangeEvent<HTMLInputElement>) {
    const {value} = e.target;
    setValue(Number(value));
  }

  return (
    <>
      <h1>Total count is {count}</h1>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <input
          style={{width:'100px', margin:'10px'}}
          value={value}
          onChange={setNewValue}
        />
        <button onClick={set}>Set to {value}</button>
      </div>
    </>
  )
}

export default App
