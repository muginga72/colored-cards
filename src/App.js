import React from "react";
import './App.css'

const Card = () => {
  return (
    <div className="card">
      <div className="square"/>
      <label className="label__style">#FF6663</label>
    </div>
  );
}

function App() {
  return (
    <div className="wrapper">
      <Card />
    </div>  
  );
}

export default App;