import React, { useState } from 'react'

import Header from './Header'

function NewEntry() {
    const [date, setDate] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    return (
        <div>
            <Header />
            <div id="newEntry">
                <h1>New Entry</h1>
            </div>
            <form id="newEntry">
                <div>
                    <p>Date</p>
                    <input
                        type="text"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <p>Title</p>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <p>Write away...</p>
                    <input
                        type="body"
                        name="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Create Account!" />
                </div>
            </form>
        </div>
    )
}

export default NewEntry;
