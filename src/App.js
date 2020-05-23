import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Main';
import Manage from './Manage';
import Login from './Login';
import GuardianList from './components/GuardianList';
import StudentList from './components/StudentList';
import TeacherList from './components/TeacherList';

function App() {
  return (
    <Router>
      <nav className='navbar navbar-expand-lg navbar-light bg-light static-top'>
        <div className='container'>
          <Link to={'/'} className='navbar-brand'>
            Registration
          </Link>

          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <Link to={'/'} className='nav-link'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/manage'} className='nav-link'>
                  Manage
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/login'} className='nav-link'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/manage' component={Manage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/guardians' component={GuardianList} />
        <Route exact path='/students' component={StudentList} />
        <Route exact path='/teachers' component={TeacherList} />
      </Switch>
    </Router>
  );
}

export default App;
