import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import LoginComponent from './modules/admin/login/login.component'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/admin" component={LoginComponent}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
