import React, {useState} from 'react';
// import { useNavigate } from "react-router-dom";

import { Button, Form, TextArea , Container, Dropdown } from 'semantic-ui-react'

function NewReplyForm ({handleNewReply, currentUser, currentPost}) {
    const [content, setContent] = useState('')

    const { id } = currentPost

// this will allow us to navigate back to the posts page or directly to the newly added post
// const navigate = useNavigate();

function handleSubmit(e) {
    e.preventDefault();

    //**UPDATE Post_ID */
    const newReply = {
        content: content,
        user_id: currentUser.id,
        post_id: id
    }

    

    console.log(newReply)

    //UPDATE Post_ID */
    fetch(`/posts/${id}/replies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newReply),
    })
    .then(resp => resp.json())
    .then(newReply => handleNewReply(newReply));
}
    return (
        <>
        <Container>
        <h1>Add a Reply</h1>
        <div class="ui centered grid">
        <div class="eight wide column">
            <div class="ui segment">
                <Form onSubmit= {handleSubmit}>
                    <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Your Reply'
                    placeholder='Type your reply here...' value={content} onChange={(e) => setContent(e.target.value)} />
                    <Button type='submit'>Post Reply</Button>
                </Form>
            </div>
        </div>
    </div>
   </Container>
   </>
    )
}

export default NewReplyForm;