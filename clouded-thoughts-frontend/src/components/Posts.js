import React from 'react'
import PostContainer from '../containers/PostContainer';
import Header from './Header';

function Posts({posts, users}) {
  return (
    <div>
      <Header />
      <div className="postDiv">
        {posts.map((posts) => (
          <PostContainer
            key={posts.id}
            posts={posts}
            users={users}
          />
        )
        )}
      </div>
    </div>
  )
}

export default Posts;
