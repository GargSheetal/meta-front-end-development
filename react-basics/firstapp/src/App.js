
import './App.css';
import logo from './assets/logo.png'

import {useState} from 'react';
import Heading from './Heading'
import Card from "./Card";
import Btn from "./Btn"
import BtnGuessing from "./BtnGuessing.js";

function App() {
  const[word, setWord] = useState('Eat');

  function handleClick() {
    setWord('Drink');
  }

  return (
    <div className="App">
      <BtnGuessing />
      <img height={50} src={logo} alt="Logo"></img>
      <Heading message={word + " at Little Lemon"}/>
        <button onClick={handleClick}>
          Click Here  
        </button>
        <button onClick={()=> setWord('Eat')}>
          Reset
        </button>

      <Btn />
        <h1>Task: Add three Card elements</h1>
        <div className="cardContainer">
        <Card h2 = "First Card's h2" h3 = "First Card's h3" />
        <Card h2 = "Second Card's h2" h3 = "Second Card's h3" />
        <Card h2 = "Third Card's h2" h3 = "Third Card's h3" />
        </div>
    </div>
  );
}

export default App;
