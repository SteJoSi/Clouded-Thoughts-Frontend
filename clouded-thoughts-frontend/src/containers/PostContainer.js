import React from 'react'

function PostContainer({ post, onDeletePost, onUpdatedPost }) {
    function handleDeleteClick() {
        fetch(`http://localhost:9292/posts/${post.id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => onDeletePost(post));
    }

    function handleEditPost() {
        fetch(`http://localhost:9292/posts/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            }),
        })
            .then((r) => r.json())
            .then((updatedPost) => onUpdatedPost(updatedPost));
    }

    return (
        <div>
            <div id="entryContainer" key={post.id}>
                <h3 className="username"><ion-icon name="person"></ion-icon></h3>
                <p className='postInfo'>Date: {post.date}</p>
                <p className='postInfo'>Title: {post.title}</p>
                <div className='postInfo'>{post.body}</div>
                <button className='postBtn' onClick={handleEditPost}><ion-icon name="pencil"></ion-icon></button><button className='postBtn' onClick={handleDeleteClick}><ion-icon name="trash"></ion-icon></button>
            </div>
        </div>
    )
}

export default PostContainer;
