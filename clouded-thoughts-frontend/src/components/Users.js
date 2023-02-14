import React from 'react';

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
