import { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

function SignUpPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const history = useHistory();

    function handleSignUp(e) {
        e.preventDefault();
        fetch("/users", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"user_name": username, "first_name": first_name, "last_name": last_name,
            "email": email, "password":password, "bio":bio})
        })
        .then(res => {
            if(res.status === 201) {
                history.push('/profile')
            }
        })
    }

    return (
        <form>
            <div id="username-field" className="basic-box">
                <label>Username: </label>
                <input type="text" name="username" className="basic-box" value={username}
                onChange={ (e) => setUsername(e.target.value)}/>
            </div>
            <div id="password-field" className="basic-box">
                <label>Password: </label>
                <input type="password" name="password" className="basic-box" value={password}
                onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div id="first-name-field" className="basic-box">
                <label>First Name: </label>
                <input type="text" name="first-name" className="basic-box" value={first_name}
                onChange={ (e) => setFirstName(e.target.value)}/>
            </div>
            <div id="last-name-field" className="basic-box">
                <label>Last Name: </label>
                <input type="text" name="last-name" className="basic-box" value={last_name}
                onChange={ (e) => setLastName(e.target.value)}/>
            </div>
            <div id="email-field" className="basic-box">
                <label>Email: </label>
                <input type="text" name="email" className="basic-box" value={email}
                onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div id="bio-field" className="basic-box">
                <label>Bio: </label>
                <input type="text" name="bio" className="basic-box" value={bio}
                onChange={ (e) => setBio(e.target.value)}/>
            </div>
            <div id="submit">
                <input type="submit" className="basic-button" onClick={handleSignUp}/>
            </div>
        </form>
    )
}

export default SignUpPage