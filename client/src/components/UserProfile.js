import React, { useState } from 'react';
import {FaPencilAlt} from 'react-icons/fa'
function UserProfile({currentUser, onDeleteUser}) {

const {id} = currentUser
const deleteAccount = () => {
console.log(currentUser.id)
    if (currentUser.id) {
        fetch(`users/${currentUser.id}`,
        { method: 'DELETE'})
        .then(() => onDeleteUser(id))
        alert("your account has been deactivated")
    }
}
    return (
        <div>
            <div>
                <h1>Woof🐶</h1>
                <h2>
                {currentUser.first_name} {currentUser.last_name} &nbsp;
                <button> <FaPencilAlt></FaPencilAlt> </button> 
                </h2>
            </div>
            <div>
                <h3> 
                    username: {currentUser.user_name} &nbsp;
                    <button> <FaPencilAlt></FaPencilAlt> </button> 
                </h3>
            </div>
            <div>
                <h3> password: {currentUser.password}</h3>
            </div>
            <div>
                <h3> email: {currentUser.email}</h3>
            </div>
            <div>
                <h3> 
                    bio: {currentUser.bio} &nbsp;
                    <button> <FaPencilAlt></FaPencilAlt> </button>
                </h3>
            </div>
            <div>
                <button onClick={deleteAccount}> Deactivate </button>
            </div>
        </div>
    )
}

export default UserProfile