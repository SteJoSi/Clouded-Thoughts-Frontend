import React from 'react'
import PostContainer from '../containers/PostContainer';
import Header from './Header';

function Posts({ posts }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/posts/${posts.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => console.log('deleted!'));
  }

  return (
    <div>
      <Header />
      <h1 id="profileSubHeading">Read away...</h1>
      <div id="postDiv">
        {posts.map((posts) => (
          <PostContainer
            key={posts.id}
            posts={posts}
          />
        )
        )}
      </div>
    </div>
  )
}

export default Posts;
