import React from 'react';
import { Link } from 'react-router-dom';

function UserContainer({ users, handleClick }) {
  return (
    <div id="userContainer" key={users.id}>
      <Link className="username" handleClick={handleClick}><ion-icon name="person"></ion-icon>{users.username}</Link>
    </div>
  )
}

export default UserContainer;
