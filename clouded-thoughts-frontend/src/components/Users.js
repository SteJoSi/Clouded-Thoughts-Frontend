// users - additional component for users that have signed up
// Read properly 

// when you create a new post, select a user from a drop down 
// component of list of users and then see the posts they make, profile like page

import React from 'react';
// import { useHistory } from 'react-router-dom';

import Header from './Header';
import UserContainer from '../containers/UserContainer';

function Users({ users }) {

    return (
        <div>
            <Header />
            <h1 id="profileSubHeading">Please Select a User!</h1>
            <div id="userDiv">
                    <UserContainer 
                        key={users.id}
                        users={users}
                    />
            </div>
        </div>
    )
}

export default Users;
