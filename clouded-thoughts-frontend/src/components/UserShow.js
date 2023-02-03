import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

function UserShow({ users }) {
    // console.log("users", users)

    const { username } = useParams()

    return (
        <div id="userShow">
            <div> 
                <Header />
            </div>
            {users.filter(user => user.username === username).map((user) => (
                <div key={user.id} className="showUser">
                    <h1 font>Welcome {user.username}!</h1>
                    <p>Name: {user.first_name} {user.last_name}</p>
                    <p>Email: {user.email}</p>
                    {user.posts.map((post) =>
                        <div id="displayPosts">
                            <h3>Title: {post.title}</h3>
                            <p>Body: {post.body}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default UserShow;