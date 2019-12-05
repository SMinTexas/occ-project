import React from 'react';
import './App.css';
import mainPic from "../src/main-page-picture.jpeg";
import boysWithBox from "../src/boys-with-boxes.jpeg";
import girlWithBox from "../src/girl-with-box.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-page-primary">
          <img className="primary-image" src={mainPic} alt="mainPic"></img>
        </div>
        <br />
        <div className="main-page-secondary">
          <img className="secondary-image" src={boysWithBox} alt="boys"></img>
          <img className="secondary-image" src={girlWithBox} alt="girl"></img>
        </div>
      </header>
    </div>
  );
}

export default App;
