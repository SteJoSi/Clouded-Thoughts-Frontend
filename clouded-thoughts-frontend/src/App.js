import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Users from './components/Users';
import NewEntry from './components/NewEntry';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>

          <Route path="/newEntry">
            <NewEntry />
          </Route>

          <Route path="/posts">
            <Posts />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
