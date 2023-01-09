import React from 'react'

import Header from './Header';
import PostContainer from '../containers/PostContainer';

function Profile() {
    return (
        <div>
            <Header />
            <div>
            <PostContainer />
            </div>
            {/* display all posts for user here */}
        </div>
    )
}

export default Profile;
