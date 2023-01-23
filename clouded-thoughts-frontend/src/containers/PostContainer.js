import React from 'react'

function PostContainer({posts}) {
    return (
        <div>
            <div id="entryContainer" key={posts.id}>
            {/* <h3 className="username"><ion-icon name="person"></ion-icon>{users.username}</h3> */}
            <p className='postInfo'>Date: {posts.date}</p>
            <p className='postInfo'>Title: {posts.title}</p>
            <div className='postInfo'>{posts.body}</div>
            <button className='postBtn'><ion-icon name="pin"></ion-icon></button><button className='postBtn'><ion-icon name="pencil"></ion-icon></button><button className='postBtn'><ion-icon name="trash"></ion-icon></button>
        </div>
        </div>
    )
}

export default PostContainer;
