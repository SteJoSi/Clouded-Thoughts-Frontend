import React, { useState } from 'react';



function PostContainer({ post, onDeletePost, onUpdatedPost }) {

    const [updatedBody, setUpdatedBody] = useState(post.body)
    const [isClicked, setIsClicked] = useState(false)

    const toggleIsClicked = () => {
        setIsClicked(() => !isClicked)
    }

    function handleDeleteClick() {
        fetch(`http://localhost:9292/posts/${post.id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => onDeletePost(post));
    }

    function handleEditPost(e) {
        e.preventDefault()

        fetch(`http://localhost:9292/posts/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "body": updatedBody,
            }),
        })
            .then((r) => r.json())
            .then((updatedPost) => {
                onUpdatedPost(updatedPost)
                toggleIsClicked()
            })
    }

    return (
        <div>
            <div id="entryContainer" key={post.id}>
                <h3 className="username"><ion-icon name="person"></ion-icon>{post.user.username}</h3>
                <p className='postInfo'>Date: {post.date}</p>
                <p className='postInfo'>Title: {post.title}</p>
                <div className='postInfo'>{post.body}</div>
                <button className='postBtn' onClick={toggleIsClicked}><ion-icon name="pencil"></ion-icon> Edit Post</button>
                <button className='postBtn' onClick={handleDeleteClick}><ion-icon name="trash"></ion-icon> Delete Post</button>
                
                {isClicked ? (
                    <form onSubmit={handleEditPost}>
                        <input type="body" value={updatedBody} onChange={(e) => setUpdatedBody(e.target.value)} />

                        <button className='postBtn' type="submit">Post Updated!</button>
                    </form>

                ) : null}
            </div>
        </div>
    )
}

export default PostContainer;
