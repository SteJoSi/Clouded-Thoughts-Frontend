import React from 'react'

function PostContainer() {
    return (
        <div>
            <h1 id="profileSubHeading">Welcome, User!</h1>
            <div id="entryContainer">
                <p>This is where the entrys will appear</p>
                <btn><ion-icon name="pencil"></ion-icon><ion-icon name="trash"></ion-icon></btn>
            </div>
        </div>
    )
}

export default PostContainer
