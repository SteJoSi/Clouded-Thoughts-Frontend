import React from 'react'

function PostContainer({ posts, onDeletePost, onUpdatedPost }) {
    function handleDeleteClick() {
        fetch(`http://localhost:9292/posts/${posts.id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => onDeletePost(posts));
    }

    function handleEditPost() {
        fetch(`http://localhost:9292/posts/${posts.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // isInCart: !item.isInCart,
            }),
        })
            .then((r) => r.json())
            .then((updatedPost) => onUpdatedPost(updatedPost));
    }

    return (
        <div>
            <div id="entryContainer" key={posts.id}>
                {/* <h3 className="username"><ion-icon name="person"></ion-icon>{users.username}</h3> */}
                <p className='postInfo'>Date: {posts.date}</p>
                <p className='postInfo'>Title: {posts.title}</p>
                <div className='postInfo'>{posts.body}</div>
                <button className='postBtn' onClick={handleEditPost}><ion-icon name="pencil"></ion-icon></button><button className='postBtn' onClick={handleDeleteClick}><ion-icon name="trash"></ion-icon></button>
            </div>
        </div>
    )
}

export default PostContainer;
