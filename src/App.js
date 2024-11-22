import React from "react";
import Display from './timer-display.js'
import "./App.css";



function App() {
  return (
  <div className="main-container">
    <div className="timer-container">
      <h2 id="header">Timer</h2>
      <Display></Display>
      
    </div>



  </div>
  )
}

export default App;
