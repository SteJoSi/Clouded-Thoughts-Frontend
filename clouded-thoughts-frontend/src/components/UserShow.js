import React from 'react';
import { useParams } from 'react-router-dom';

function UserShow({ users }) {
    console.log("users", users)

    const { id } = useParams()

    return (
        <div id="userShow">
            {users.filter(user => user.id === id).map((user, id) => (
                <div key={user.id} className="showUser">
                    <h1>{user.username}</h1>
                    <p>{user.first_name}{user.last_name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UserShow
