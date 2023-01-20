import React from 'react'
import PostContainer from '../containers/PostContainer';

function Posts({posts}) {
  return (
    <div>
      <div className="postDiv">
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
