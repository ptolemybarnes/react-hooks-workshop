import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('?')
  const [myName, setMyName] = useState('')

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(response => response.json())
      .then(({ weight }) => setWeight(weight))
  }, [name]);

  return (
    <div className="App">
      <p> Hello Trainer { myName }</p>
      <input type='text' onChange={event => setMyName(event.target.value)} />
      <p>{ name } weighs { weight }</p>
      <input type='text' onChange={event => setName(event.target.value)} />
    </div>
  );
}

export default App;
