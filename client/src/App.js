import React, { useState, useEffect } from "react";
import './App.css'
import { Link, NavLink, BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import PostContainer from "./components/PostContainer";
import NewPostForm from "./components/NewPostForm";
import UserProfile from "./components/UserProfile";
import PostDetails from "./components/PostDetails";
import SignUpPage from "./components/SignUpPage";

function App() {
  const [count, setCount] = useState(0);

  const [currentPost, setCurrentPost] = useState('');
  const [posts, setPosts] = useState([]);
  const [replies, setReplies] = useState([])
  const [currentUser, setCurrentUser] = useState('');
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // console.log("replyme:", replies)
  
  useEffect(() => {
    fetch("/auth")
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  // console.log("me", currentUser)

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
    // .then(console.log('fetched!'))
  }, [replies]);

   // helper function for adding new recipe
  // function handleNewPost(newPost) {
  //   setPosts([...posts, newPost])
  // }

  function handleUserLogin(user) {
    setCurrentUser(user)
  }

  // function handleNewReply(newReply) {
  //   setReplies([...replies, newReply])
  // }

  
  //deactivate user from db
  const onDeleteUser = (id) => {
    const updatedUser = users.filter((currentUser) => currentUser.id !== id)
    setCurrentUser(updatedUser)
  }

   //edit user profile
  const onEditUserProfile = (modifiedUser) => {
    const updateUser = users.map(user => currentUser.id === user.id ? modifiedUser : user)
    setCurrentUser(updateUser)
  }

   //change value on search bar
   const changeSearch = (value) => {
    setSearch(value)
  }

  //display a list of posts via search: post title
  const filteredPosts = posts.filter(post => (
    post.title.toLowerCase().includes(search.toLowerCase())
    || post.breed.toLowerCase().includes(search.toLowerCase())
    || post.body.toLowerCase().includes(search.toLowerCase())
    )
  )
  

  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <Switch>
        <Route path="/login">
          <LoginPage handleUserLogin={handleUserLogin}/>
        </Route>
        <Route exact path="/home">
          <h1>Page Count: {count}</h1>
        </Route>
        <Route path="/posts/:id">
          <PostDetails
            statereplies={replies}
            posts={posts} 
            // handleNewReply={handleNewReply} 
            currentUser={currentUser} 
            currentPost={currentPost}
            setCurrentPost={setCurrentPost}
            setReplies={setReplies}
          />
        </Route>
        <Route path="/threads">
          <PostContainer
            posts={filteredPosts}
            currentPost={currentPost}
            setCurrentPost={setCurrentPost}
            changeSearch={changeSearch}
            search={search}
        />
        </Route>
        <Route path="/newpost">
          <NewPostForm 
            // handleNewPost={handleNewPost} 
            currentUser={currentUser}
            setPosts={setPosts}
          />
        </Route>
        <Route path="/profile">
          <UserProfile
          currentUser={currentUser}
          onDeleteUser={onDeleteUser}
          onEditUserProfile={onEditUserProfile}
          />
        </Route>
        <Route path="/replies">
        </Route>
        <Route path="/signup">
          <SignUpPage/>
        </Route>
        <Route path='*'>
          <Redirect to="/threads"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;