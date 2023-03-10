import React, {useState} from 'react';
// import { useNavigate } from "react-router-dom";
import { Redirect, Route, useHistory } from "react-router-dom";

import { Button, Form, TextArea , Container, Dropdown } from 'semantic-ui-react'

function NewPostForm ({handleNewPost, currentUser, setPosts}) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [breed, setBreed] = useState('')
    const [showOptions, setShowOptions] = useState(false);
    const history = useHistory();

// this will allow us to navigate back to the posts page or directly to the newly added post
// const navigate = useNavigate();

function handleDropdown(e) {
    e.preventDefault();
    setShowOptions(!showOptions)
}

function handleSelect(e) {
    e.preventDefault()
    setBreed(e.target.value);
    setShowOptions(!showOptions);
}

function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
        title: title,
        body: body,
        breed: breed,
        creator_id: currentUser.id
    }

    console.log(newPost)

    fetch("/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    })
    // .then(resp => resp.json())
    .then(res => {
        if(res.status === 201) {
        fetch("/posts")
        .then((r) => r.json())
        .then((data) => setPosts(data))
        
        history.push('/posts')
    } else {
        res.json().then((errorData)=> alert(errorData.errors))
        // res.json().then((errorData)=> alert(errorData.error))
        }
    });
    // navigate("/posts")
}
    if (!currentUser) {history.push("/posts")}
    return (
        <>
            <h1 className='basic-box'>Add a New Post</h1>
            <h2 className='basic-box'>Get the conversation started by adding a new post below</h2>
            <div className='post-container'>
                <form>
                    <div className='basic-box'>
                        <label>Title: </label>
                        <input type="text" required placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='basic-box'>
                        <label>Body: </label>
                        <div className='basic-box'>
                            <textarea required rows="10" cols="100" value={body} onChange={(e) => setBody(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex'>
                        <button onClick={handleDropdown} className='basic-button max-h-9'>Category: {breed} </button>
                        <div className={showOptions ? "show-dropdown" : "hide-dropdown"}>
                            <button value="Dog Breeds" className="block hover:bg-gray-300" onClick={(e) => handleSelect(e)}>Dog Breeds</button>
                            <button value="Tips and Tricks" className="block hover:bg-gray-300" onClick={(e) => handleSelect(e)}>Tips and Tricks</button>
                            <button value="Training and Behavior" className="block hover:bg-gray-300" onClick={(e) => handleSelect(e)}>Training and Behavior</button>
                            <button value="Health and Wellness" className="block hover:bg-gray-300" onClick={(e) => handleSelect(e)}>Health and Wellness</button>
                            <button value="Adoption and Rescue" className="block hover:bg-gray-300" onClick={(e) => handleSelect(e)}>Adoption and Rescue</button>
                            <button value="Grooming and Hygiene" className="block hover:bg-gray-300" onClick={(e) => handleSelect(e)}>Grooming and Hygiene</button>
                            <button value="Adoption and Rescue" className="block hover:bg-gray-300" onClick={(e) => handleSelect(e)}>Adoption and Rescue</button>
                            <button value="Dog-friendly Places and Events" className="block hover:bg-gray-300" onClick={(e) => handleSelect(e)}>Dog-friendly Places and Events</button>
                        </div>
                    </div>
                    <div className='basic-button inline-block'>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewPostForm;