// username & password with a sign up button to create a profile

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    function handleSignUpClickEvent() {
        history.push("/CreateAccount");
    }

    return (
        <div>
            <div id="loginTitle">
                <h1>Login</h1>
            </div>
            <form id="login">
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
                        type="text"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
                <div>
                    <input type="submit" value="Sign Up" handleClick={handleSignUpClickEvent} />
                </div>
            </form>
        </div>
    )
}

export default Login;