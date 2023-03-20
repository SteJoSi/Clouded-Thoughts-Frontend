import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Users from './components/Users';
import NewEntry from './components/NewEntry';
import UserShow from './components/UserShow';

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
    console.log("addUser", newUser)
    const updatedUser = users.map(user => {
      if (user.id === newUser.id) {
        return {
          ...posts,
          users: [...user, newUser]
        }
      } else {
        return user
      }
    })
    setPostsData(updatedUser)
    setUsersData([newUser, ...users])
  }

  function addPost(newPost) {
    const updatedUsers = users.map(user => {
      if (user.id === newPost.user_id) {
        return {
          ...user,
          posts: [...user.posts, newPost]
        }
      } else {
        return user
      }
    })
    setUsersData(updatedUsers)
    setPostsData([newPost, ...posts])
  }


  function handleDeletePost(deletedPost) {
    const updatedUsers = users.map(user => {
      if (user.id === deletedPost.user_id) {
        return {
          ...user,
          posts: user.posts.filter((post) => post.id !== deletedPost.id)
        }
      } else {
        return user
      }
    })
    const updatedPosts = posts.filter((post) => post.id !== deletedPost.id)
    setUsersData(updatedUsers);
    setPostsData(updatedPosts);
  }

  function handleUpdatePost(updatedPost) {

    const updatedPosts = posts.map((post) => {
      if (post.id === updatedPost.post_id) {
        return {
          ...post,
          users: users.posts.map((post) => {
            if (post.id === updatedPost.id) {
              return updatedPost;
            } else {
              return users;
            }
          })
        };
      } else {
        return post;
      }
    })
    const updatedPostsComponents = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    })
    setPostsData(updatedPosts);
    setUsersData(updatedPostsComponents)
  }

  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/users/:username">
            <UserShow
              users={users}
            />
          </Route>

          <Route path="/users">
            <Users users={users} />
          </Route>

          <Route path="/newEntry">
            <NewEntry
              addPost={addPost}
              users={users}
            />
          </Route>

          <Route path="/posts">
            <Posts
              posts={posts}
              users={users}
              onDeletePost={handleDeletePost}
              onUpdatedPost={handleUpdatePost}
            />
          </Route>

          <Route exact path="/">
            <Home addUser={addUser} />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
