import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  return (
      <div id="page">
          <div className="page-wrapper">
              <Navbar/>
              <Main/>
          </div>
      </div>
  );
};

export default App;
