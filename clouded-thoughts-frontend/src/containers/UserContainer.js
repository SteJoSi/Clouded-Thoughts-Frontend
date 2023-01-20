import React from 'react';
import { Link } from 'react-router-dom';

function UserContainer({ users }) {
  return (
    // use link component to display users
    <div id="userContainer" key={users.id}>
      <Link className="username"><ion-icon name="person"></ion-icon>{users.username}</Link>
    </div>
  )
}

export default UserContainer;
