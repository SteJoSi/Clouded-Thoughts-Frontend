import React from 'react'

function UserContainer({ users }) {
  return (
    <div id="userContainer" key={users.id}>
      <h3 className="username"><ion-icon name="person"></ion-icon>{users.username}</h3>
    </div>
  )
}

export default UserContainer;
