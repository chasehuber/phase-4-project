import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';

import { Button, Form, TextArea , Container, Dropdown } from 'semantic-ui-react'

function NewPostForm ({handleNewPost, currentUser}) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [breed, setBreed] = useState('')

function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
        title: title,
        body: body,
        breed: breed,
        creator_id: currentUser.id
    }

    //something wrong with this fetch request
    fetch("/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    })
    .then(resp => resp.json())
    .then(newPost => handleNewPost(newPost));
    navigate("/posts")
}
    return (

        <>
        <Container>
        <Header/>
        <h1>Add a New Post</h1>
        <h2>Get the conversation started by adding a new post below</h2>
        <div class="ui centered grid">
        <div class="eight wide column">
            <div class="ui segment">
                <Form onSubmit= {handleSubmit}>
                    <Form.Field>
                        <label>Title</label>
                        <input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Field>
                    <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Post Body'
                    placeholder='Body' value={body} onChange={(e) => setSteps(e.target.value)} />
                    <Form.Field>
                        <label>Related Breed</label>
                        <Dropdown
                            placeholder='Select Breed'
                            selection options={[{ key: 'easy', value: 'easy', text: 'easy' },{ key: 'moderate', value: 'moderate', text: 'moderate' },{ key: 'hard', value: 'hard', text: 'hard' },        ]}
                            value={breed}
                            onChange={(e, data) => setDifficulty(data.value)}
                        />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        </div>
    </div>
   </Container>
   </>
    )
   
}




export default NewPostForm; 