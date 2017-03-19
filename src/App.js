import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AddEvent from './components/addevent'
import ListEvent from './components/listevent'
import VerifyEvent from './components/verifyevent'

const App = () => (
    <div className="App">
      <Router>
          <div>
            <div className="menu-wrapper">
              <ul className="menu-top">
                  <li className='menu-list'>
                      <Link to='/' className="active">
                        Add New Event
                      </Link>
                  </li>
                    <li className='menu-list'>
                        <Link to='/listevent'>
                            List of Event
                        </Link>
                    </li>
                    <li className='menu-list'>
                        <Link to='/verifyevent'>
                            Task Images Verify
                        </Link>
                    </li>
                </ul>
            </div>

              <Route exact path='/' component={AddEvent}/>
              <Route exact path='/listevent' component={ListEvent}/>
              <Route exact path='/verifyevent' component={VerifyEvent}/>
          </div>
      </Router>
    </div>

)

export default App;
