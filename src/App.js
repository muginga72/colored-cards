import React, {useState} from "react";
import './App.css'
import Card from "./Card";

const Square = (props) => {
  return (
    <div className="card_style">
      <div style={{ backgroundColor: props.color }} className="square"></div>
      <p className="text-bold">{ props.color }</p>
    </div>
  )
}

function App(props) {
  const [colors, setColors] = useState(['#FF6663', '#FFA737', '#FFD345', '#FFC770'])

  return (
    <div className="wrapper">
      <h1 style={{ color: 'blue' }}>Badge</h1>
      {colors.map((color) => (
        <Square color={color} />
      ))}
      <Card />
    </div>
  );
}

export default App;