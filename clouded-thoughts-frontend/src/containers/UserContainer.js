import React from 'react';
import { Link } from 'react-router-dom';

function UserContainer({ users }) {
  // console.log("userContainer", users)

  return (
    <div id="displayUser" key={users.id}>
      {users.map((user) => (
        <div id="displayUser">
          <Link to={`/users/${user.username}`} className="username"><ion-icon name="person"></ion-icon>{user.username}</Link>
        </div>
      ))}
    </div>
  )
}

export default UserContainer;
