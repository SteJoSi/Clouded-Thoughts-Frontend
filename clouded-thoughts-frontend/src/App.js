import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Users from './components/Users';
import NewEntry from './components/NewEntry';
import Footer from './components/Footer';

function App() {
  const [users, setUsersData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then(resp => resp.json())
      .then((userData) => {
        setUsersData(userData)
      });
  }, []);

  function addUser(newUser) {
    setUsersData([newUser, ...users])
  }

  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/users">
            <Users users={users}/>
          </Route>

          <Route path="/newEntry">
            <NewEntry />
          </Route>

          <Route path="/posts">
            <Posts />
          </Route>

          <Route exact path="/">
            <Home addUser={addUser}/>
          </Route>

        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
