import { useEffect, useState } from "react";

function LoginPage({ setCurrentUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      mode:"cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "user_name":username, "password":password })
    })
      .then(res => {
        if(res.ok) {
          res.json().then(user => setCurrentUser(user))
        }
      })
    setPassword('');
  }

  return (
    <form>
      <div id="username-field">
        <label>Username: </label>
        <input type="text" name="username" value={username}
          onChange={ (e) => setUsername(e.target.value) }/>
      </div>
      <div id="password-field">
        <label>Password: </label>
        <input type="password" name="password" value={password}
          onChange={ (e) => setPassword(e.target.value) }/>
      </div>
      <div>
        <input type="submit" onClick={handleSubmit}/>
      </div>
    </form>
  )
}

export default LoginPage