import React from 'react'

function UserShow({ users }) {
    console.log("users", users)
    return (
        <div>
            {/* displays posts according to 1 user and their posts */}
            <h1>Welcome: {users}</h1>
        </div>
    )
}

export default UserShow
