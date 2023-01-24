import React from 'react'
import PostContainer from '../containers/PostContainer';
import Header from './Header';

function Posts({ posts, onDeletePost, onUpdatedPost }) {

  return (
    <div>
      <Header />
      <h1 id="profileSubHeading">Read away...</h1>
      <div id="postDiv">
        {posts.map((posts) => (
          <PostContainer
            key={posts.id}
            posts={posts}
            onDeletePost={onDeletePost}
            onUpdatedPost={onUpdatedPost}
          />
        )
        )}
      </div>
    </div>
  )
}

export default Posts;
