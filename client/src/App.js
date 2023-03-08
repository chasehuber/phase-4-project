import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/home">
          <h1>Page Count: {count}</h1>
        </Route>
        <Route path="/posts">
          <h1>Posts</h1>
        </Route>
        <Route path="/newpost">
          <h1>NewPost</h1>
        </Route>
        <Route path="/profile">
          <h1>Profile</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;