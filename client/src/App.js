import React, { useState, useEffect } from "react";
import { Link, NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import PostContainer from "./components/PostContainer";
import NewPostForm from "./components/NewPostForm";
import UserProfile from "./components/UserProfile";
import PostDetails from "./components/PostDetails";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("/posts")
    .then((r) => r.json())
    .then((data) => setPosts(data))
  }, []);

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
        <Route path="/posts/:id">
          <PostDetails
          posts={posts}
          />
        </Route>
        <Route path="/posts">
          <PostContainer
            posts={posts}
        />
        </Route>
        <Route path="/newpost">
          <NewPostForm/>
        </Route>
        <Route path="/profile">
          <UserProfile/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;