import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Header from './Header'

function NewEntry() {
    const [date, setDate] = useState("")
    const [title, setTitle] = useState("")
    const [user, setUser] = useState("")
    const [body, setBody] = useState("")
    // make drop down for users (select tag), list of users are 1 option tag

    const history = useHistory()
    
    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            date: date,
            title: title,
            user: user,
            body: body
        }
        fetch("http://localhost:9292/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((newPost) => {
                console.log('new post', newPost)
                // addPost(newPost)
                history.push("/posts");

            })
    }

    return (
        <div>
            <Header />
            <div id="newEntry">
                <h1>New Entry</h1>
            </div>
            <form id="newEntry" onSubmit={handleSubmit}>
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
