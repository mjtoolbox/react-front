import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav className='navbar navbar-expand-lg navbar-light bg-light static-top'>
        <div className='container'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'></li>
            <li className='nav-item'></li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route exact path='/' />
        <Route exact path='/login' />
      </Switch>
    </Router>
  );
}

export default App;
