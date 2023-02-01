import React from 'react';
import { Link } from 'react-router-dom';

function UserContainer({ users }) {

// console.log("userContainer", users)
  return (
    <div id="displayUser" key={users.id}>
      <Link to={`/users/${users.id}`} className="username"><ion-icon name="person"></ion-icon>{users.username}</Link>
    </div>
  )
}

export default UserContainer;
