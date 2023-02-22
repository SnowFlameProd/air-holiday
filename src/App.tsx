import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Congratulations from "./components/Congratulations";

const App = () => {
  return (
      <div id="page">
          <div className="page-wrapper">
              <Navbar/>
              <Main/>
              <Congratulations/>
          </div>
      </div>
  );
};

export default App;
