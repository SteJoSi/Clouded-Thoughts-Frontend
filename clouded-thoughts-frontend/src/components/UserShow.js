import React from 'react';
import { useParams } from 'react-router-dom';

function UserShow({ users }) {
    // console.log("users", users)

    const { username } = useParams()

    return (
        <div id="userShow">
            {users.filter(user => user.username === username).map((user) => (
                <div key={user.id} className="showUser">
                    <h1>Welcome {user.username}!</h1>
                    <p>Name: {user.first_name} {user.last_name}</p>
                    <p>Email: {user.email}</p>
                    {user.posts.map((post) =>
                        <>
                            <h3>Title: {post.title}</h3>
                            <p>Body: {post.body}</p>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default UserShow;