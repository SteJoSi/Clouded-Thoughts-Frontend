import React from 'react'

function PostContainer() {
    return (
        <div>
            <h1 id="profileSubHeading">Read away...</h1>
            <div id="entryContainer">
                <p>This is where the entrys will appear</p>
                {/* make these individual buttons on the same line and functional */}
                <button><ion-icon name="pin"></ion-icon><ion-icon name="pencil"></ion-icon><ion-icon name="trash"></ion-icon></button>
            </div>
        </div>
    )
}

export default PostContainer;
