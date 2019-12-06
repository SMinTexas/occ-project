import React from 'react';
import './App.css';
import mainPic from "../src/pictures/main-page-picture.jpeg";
import boysWithBox from "../src/pictures/boys-with-boxes.jpeg";
import girlWithBox from "../src/pictures/girl-with-box.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-page-primary">
          <div>
            <img className="primary-image" src={mainPic} alt="mainPic"></img>
          </div>
        </div>
        <br />
        <div className="main-page-secondary">
          <div>
            <img className="secondary-image" src={boysWithBox} alt="boys"></img>
            <img className="secondary-image" src={girlWithBox} alt="girl"></img>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
