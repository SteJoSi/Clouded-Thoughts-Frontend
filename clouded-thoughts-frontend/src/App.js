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
  const [posts, setPostsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then(resp => resp.json())
      .then((userData) => {
        setUsersData(userData)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/posts")
      .then(resp => resp.json())
      .then((postData) => {
        setPostsData(postData)
      });
  }, []);

  function addUser(newUser) {
    setUsersData([newUser, ...users])
  }

  function addPost(newPost) {
    setPostsData([newPost, ...posts])
  }

  function handleDeletePost(deletedPost) {
    const updatedPosts = posts.filter((post) => post.id !== deletedPost.id);
    setPostsData(updatedPosts);
  }

  function handleUpdatePost(updatedPost) {
    console.log("Update Post:", updatedPost);
    const updatedPosts = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    });
    setPostsData(updatedPosts);
  }

  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/users">
            <Users users={users} />
          </Route>

          <Route path="/newEntry">
            <NewEntry addPost={addPost} />
          </Route>

          <Route path="/posts">
            <Posts posts={posts} onDeletePost={handleDeletePost} onUpdatedPost={handleUpdatePost}/>
          </Route>

          <Route exact path="/">
            <Home addUser={addUser} />
          </Route>

        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
