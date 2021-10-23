import React from "react";
import './App.css'

const Box = () => {
  return (
    <div className="box">
      <div className="red-square"></div>
      <p className="text-bold">#FF6663</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Box />
      <Box />
      <Box />
    </div>
  );
}

export default App;
