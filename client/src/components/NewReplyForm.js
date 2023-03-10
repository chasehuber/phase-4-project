import React, {useState, useNavigate} from 'react';
import {Link, } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

import { Button, Form, TextArea , Container, Dropdown } from 'semantic-ui-react'

function NewReplyForm ({replies, handleNewReply, currentUser, currentPost, setReplies, setCurrentPost}) {
    const initialContent = ''
    const [content, setContent] = useState(initialContent)

    // const navigate = useNavigate();
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

        try {
        //UPDATE Post_ID */
        fetch(`/posts/${id}/replies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReply),
        })
        //Rerender CurrentPost And Clear Reply Input Field
        .then(res => {
            if(res.status === 201) {
            fetch(`/posts/${id}/replies`)
            .then(r => r.json())
            .then(data => (setReplies(data)))
            .then(() =>setContent(initialContent))
        } else {
            res.json().then((errorData)=> alert(errorData.errors))
        }
    })}
        catch (error){
            console.log(error.message);
        }
    }

    return (
        <>
        <h1 className='basic-box max-w-max'>Add a Reply</h1>
        <div className='basic-box'>
            <form onSubmit= {handleSubmit}>
                <div className='basic-box'>
                    <textarea
                    className='w-full'
                    rows="4"
                    label='Your Reply'
                    placeholder='Type your reply here...' value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div className='basic-button max-w-max text-white bg-green-500 hover:bg-green-300'>
                    <button type='submit'>Post Reply</button>
                </div>
            </form>
        </div>
   </>
    )
}

export default NewReplyForm;