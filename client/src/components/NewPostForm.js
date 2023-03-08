import React, {useState} from 'react';
// import { useNavigate } from "react-router-dom";

import { Button, Form, TextArea , Container, Dropdown } from 'semantic-ui-react'

function NewPostForm ({handleNewPost}) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [breed, setBreed] = useState('')

// this will allow us to navigate back to the posts page or directly to the newly added post
// const navigate = useNavigate();

function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
        title: title,
        body: body,
        breed: breed,
        creator_id: "currentUser.id"
    }

    console.log(newPost)

    fetch("/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    })
    .then(resp => resp.json())
    .then(newPost => handleNewPost(newPost));
    // navigate("/posts")
}
    return (

        <>
        <Container>
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
                    placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} />
                    <Form.Field>
                        <label>Related Breed</label>
                        <Dropdown
                            placeholder='Select Breed'
                            selection options={[{ key: 'Goldendoodle', value: 'Goldendoodle', text: 'Goldendoodle' },{ key: 'French Bulldog', value: 'French Bulldog', text: 'French Bulldog' },{ key: 'Havanese', value: 'Havanese', text: 'Havanese' }, { key: 'Mutt', value: 'Mutt', text: 'Mutt' }]}
                            value={breed}
                            onChange={(e, data) => setBreed(data.value)}
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