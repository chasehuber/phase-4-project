import { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

function LoginPage({ handleUserLogin, currentUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();
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
          res.json().then(user => handleUserLogin(user))
          .then(()=> history.push('/posts'))
          .then(() => window.location.reload());
        } else {
          res.json().then((errorData)=> alert(errorData.error))
        }
      })
    setPassword('');
  }

  return (
    <>
    <form>
        <div id="username-field" className="basic-box">
          <label>Username: </label>
          <input type="text" name="username" className="basic-box" value={username}
            onChange={ (e) => setUsername(e.target.value) }/>
        </div>
        <div id="password-field" className="basic-box">
          <label>Password: </label>
          <input type="password" name="password" className="basic-box" value={password}
            onChange={ (e) => setPassword(e.target.value) }/>
        </div>
        <div>
          <input type="submit" className="basic-button" onClick={handleSubmit}/>
        </div>
      </form>
      {/* {errors?<h2>{errors}</h2>:null} */}
    </>
  )
}

export default LoginPage