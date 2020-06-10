import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import Children from './components/Children';
// import {Button} from 'react-boostrap'

function App() {
  let count = useSelector(state => state.count)
  let dispatch =  useDispatch()
  
  
  // const increaseNum = () => {
  //   dispatch({type:'Increment'}) //dispatch send action, and action
  // }

  const handleChange = (e) => {
    // e.target.value
    dispatch({type: 'SetColor', payload: e.target.value})
  }

  
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({type:'Increment', payload: 1})}>Increment</button>
      {count == 0 ? <button disabled='true'>Disabled</button> : <button onClick={() => dispatch({type:'Decrement', payload: 1})}>Decrement</button>}
      <button onClick={() => dispatch({type:'Reset'})}>Reset</button>
      <input onChange={handleChange} placeholder='change color'></input>
      <Children/>
    </div>
  );
}

export default App;
