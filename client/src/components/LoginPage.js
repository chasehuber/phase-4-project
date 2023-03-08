import { useEffect, useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

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