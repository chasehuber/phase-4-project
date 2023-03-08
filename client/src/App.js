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
  const [currentUser, setCurrentUser] = useState('');
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("/auth")
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
      console.log(res)
    })
  },[])

  useEffect(()=> {
    fetch("users/")
    .then(r => r.json())
    .then(data => {
      setUsers(data)
    })
  }, [])

  useEffect(() => {
     fetch("/posts")
     .then((r) => r.json())
     .then((data) => setPosts(data))
  }, []);

   // helper function for adding new recipe
  function handleNewPost(newPost) {
    setPosts([...posts, newPost])
  }
  
  //deactivate user from db
  const onDeleteUser = (id) => {
    const updatedUser = users.filter((currentUser) => currentUser.id !== id)
    setCurrentUser(updatedUser)
  }

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
          <NewPostForm handleNewPost={handleNewPost}/>
        </Route>
        <Route path="/profile">
          <UserProfile
          currentUser={currentUser}
          onDeleteUser={onDeleteUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;