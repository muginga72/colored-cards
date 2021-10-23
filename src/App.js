import React from "react";
import './App.css'

const Card = (props) => {
  return (
    <div className="card">
      <div className="square"></div>
      <p className="color-code">#FF6663</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default App;
