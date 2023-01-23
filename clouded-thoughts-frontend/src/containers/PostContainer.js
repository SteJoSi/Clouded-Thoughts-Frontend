import React from 'react'

function PostContainer({posts, users}) {
    return (
        <div>
            <h1 id="profileSubHeading">Read away...</h1>
            <div className="entryContainer" key={posts.id}>
            <h3 className="username"><ion-icon name="person"></ion-icon>{users.username}</h3>
            <p>{posts.date}</p>
            <p>{posts.title}</p>
            <div>{posts.body}</div>
            <button><ion-icon name="pin"></ion-icon><ion-icon name="pencil"></ion-icon><ion-icon name="trash"></ion-icon></button>
        </div>
        </div>
    )
}

export default PostContainer;
