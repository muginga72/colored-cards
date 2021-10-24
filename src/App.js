import React from "react";
import './App.css'

const Card = () => {
  return (
    <div className="card" >
      <div className="body">
        <div className="square" />
        <div>
          <label className="label__style">
            #FF6663</label>
        </div>
      </div>
    </div>
  );
}

function App() {
  return(
    <div className="wrapper">
      <Card />
    </div>
  );
}

export default App;