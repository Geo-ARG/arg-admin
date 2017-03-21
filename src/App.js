import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AddEvent from './components/addevent'
import ListEvent from './components/listevent'
import VerifyEvent from './components/verifyevent'
import Login from './components/login'

const App = () => (
    <div className="App">
      <Router>
          <div>
            <div className="menu-wrapper">
              <ul className="menu-top">
                  <li className='menu-list'>
                      <Link to='/addevent'>
                        Add New Event
                      </Link>
                  </li>
                    <li className='menu-list'>
                        <Link to='/listevent'>
                            List of Events
                        </Link>
                    </li>
                    <li className='menu-list'>
                        <Link to='/verifyevent'>
                            Task Images Verify
                        </Link>
                    </li>
                    <li className='menu-logout'>
                        <Link to='/'>
                            <b>Logout</b>
                        </Link>
                    </li>
                </ul>
            </div>

              <Route exact path='/addevent' component={AddEvent}/>
              <Route exact path='/' component={Login}/>
              <Route exact path='/listevent' component={ListEvent}/>
              <Route exact path='/verifyevent' component={VerifyEvent}/>
          </div>
      </Router>
    </div>

)

export default App;
