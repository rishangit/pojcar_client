import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import AdminComponent from './modules/admin/admin.component'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route  path="/admin" component={AdminComponent}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
