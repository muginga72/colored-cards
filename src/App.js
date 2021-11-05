import React, { useState } from "react";
import './App.css'
import Card from "./Card";

function App() {
  const [cards, setCards] = useState('');

  return (
    <div className="wrapper">
      <h1 style={{ color: 'blue' }}>Card</h1>
      <Card />
    </div>
  );
}

export default App;