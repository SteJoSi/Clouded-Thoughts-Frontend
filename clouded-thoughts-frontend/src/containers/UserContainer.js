import React from 'react'

function UserContainer({ users }) {
  return (
    <div id="userContainer" key={users.id}>
      <a className="username" href="http://localhost:3000/posts"><ion-icon name="person"></ion-icon>{users.username}</a>
    </div>
  )
}

export default UserContainer;
