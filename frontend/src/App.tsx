import React from 'react';
import Signup from "components/Signup/Signup"
import Login from "components/Login/Login"
import './App.css';

/*
  Add redux
  Search for design libraries (material UI, Ant design)
  Validate forms FE and BE
*/

function App() {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
}

export default App;
