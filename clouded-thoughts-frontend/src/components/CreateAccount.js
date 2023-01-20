import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateAccount({addUser}) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    function handleFormSubmit(e) {
        e.preventDefault()
        const accountFormData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password
        }
        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(accountFormData),
        })
            .then((r) => r.json())
            .then((newUser) => {
                console.log("user", newUser)
                addUser(newUser)
                history.push("/users");

            })
    }
    

  return (
    <div>
       <div id="accountTitle">
                <h1>Sign Up Now!</h1>
            </div>
            <form id="account" onSubmit={handleFormSubmit}>
                <div>
                    <p>First Name</p>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <p>Last Name</p>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <p>Email</p>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <p>Username</p>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <p>Password</p>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Create Account!" />
                </div>
            </form>

    </div>
  )
}

export default CreateAccount
