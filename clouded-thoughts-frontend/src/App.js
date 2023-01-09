import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import NewEntry from './components/NewEntry';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          {/* <Route path="/logout">
            <Logout />
          </Route> */}

          {/* <Route path="/create">
            <Create />
          </Route> */}

          {/* <Route path="/posts">
            <Posts />
          </Route> */}
          <Route path="/newEntry">
            <NewEntry />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
