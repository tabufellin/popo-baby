//import React from 'react';
import { configureStore } from '../../store'
import CreateBabe from '../CreateBabe'
import CreateEvent from '../CreateEvent'
import events from '../events'
// still have to see wat to do with the id value and the datetiem thing
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
//import { Router, Switch, Route} from 'react-router-dom'
//import Link from 'react'
//import { Route } from 'react-router-dom'
//import styles from "./styles.css"
export const history = createBrowserHistory()
const store = configureStore()


import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';

const Home = () => <h1>jljklj</h1>;
const babe = () => <h1>babe</h1>;

const createBabe = () => {
  <div className="crearBebeS">
    <CreateBabe></CreateBabe>
  </div>
  
}

// We give each route either a target `component`, or we can send functions in `render` or `children` 
// that return valid nodes. `children` always returns the given node whether there is a match or not.
const App = () => (
  <Router history={history}>
    <Provider store={store}>
      <Link to="/">createBabe</Link>{' '}
      <Link to={{pathname: '/babe'}}>Create event</Link>{' '}
      <Link to="/contact">Contact</Link>
      
      <Switch>
        <Route exact path="/" component={CreateBabe} />
        <Route path="/babe" component={CreateEvent}>
          <CreateEvent></CreateEvent>
        </Route>
      </Switch>


    </Provider>

  </Router>
);

export default App
