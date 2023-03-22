import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Congratulations from "./components/Congratulations";
import Game from "./components/Game";
import Moments from "./components/Moments";

const App = () => {
  return (
      <div id="page">
          <div className="page-wrapper">
              <Navbar/>
              <Main/>
              <Congratulations/>
              <Game/>
              <Moments/>
          </div>
      </div>
  );
};

export default App;
