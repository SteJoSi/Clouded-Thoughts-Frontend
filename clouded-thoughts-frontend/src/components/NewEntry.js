import React, { useState } from 'react'

import Header from './Header'

function NewEntry() {
    const [date, setDate] = useState("")
    const [title, setTitle] = useState("")
    const [user, setUser] = useState("")
    const [body, setBody] = useState("")
    // make drop down for users (select tag), list of users are 1 option tag
    
    return (
        <div>
            <Header />
            <div id="newEntry">
                <h1>New Entry</h1>
            </div>
            <form id="newEntry">
                <div>
                    <label>User: </label>
                    <input
                        type="text"
                        name="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div>
                    <label>Date: </label>
                    <input
                        type="text"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Title: </label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <p>Write Away...</p>
                    <textarea
                        type="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Post New Entry!" />
                </div>
            </form>
        </div>
    )
}

export default NewEntry;
