// users - additional component for users that have signed up
// Read properly 

// when you create a new post, select a user from a drop down 
// component of list of users and then see the posts they make, profile like page

import React from 'react';
// import { useHistory } from 'react-router-dom';

import Header from './Header';
import UserContainer from '../containers/UserContainer';

function Users({users}) {
    // const history = useHistory()
// this should re-direct to the user that is clicked with their posts displayed
    // function handleClick() {
    //     history.push(`/users/${users.id}`);
    // }

    return (
        <div>
            <Header />
            <h1 id="profileSubHeading">Welcome!</h1>
            <div id="userDiv">
                {users.map((users) => (
                    <UserContainer 
                        key={users.id}
                        users={users}
                        // handleClick={handleClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default Users;
