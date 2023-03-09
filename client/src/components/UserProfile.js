import React, { useState } from 'react';
import profileIcon from '../assets/profileIcon.png'
function UserProfile({currentUser, onDeleteUser, onEditUserProfile}) {

const [editFormIsOpen, setEditFormIsOpen] = useState(false)
const [profilePhoto, setProfilePhoto] = useState(profileIcon)

console.log(currentUser)
const initialFormValues = {
    first_name: currentUser.first_name,
    last_name:currentUser.last_name,
    username:currentUser.user_name,
    password:currentUser.password,
    bio: currentUser.bio
}

const [ formData, setFormData] = useState(initialFormValues)


const { username, first_name, last_name, password, bio} = formData

const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
}

console.log(formData)
// const updateUserDetails = (e) => {
//     e.preventDefault()
//     setUserDetails({
//         name: e.target.fullName.value,
//         username: e.target.userName.value,
//         password: e.target.userPassword.value,
//         bio: e.target.userBio.value
//     })
//     setEditFormIsOpen(false)
// }

const handleEditFormSubmit = (e) => {
    e.preventDefault()
    setEditFormIsOpen(false)

    const requestObj = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }

    fetch(`users/${currentUser.id}`, requestObj)
        .then(response => response.json())
        .then(data => {
            onEditUserProfile(formData)
            //setFormData(initialFormValues)
            setEditFormIsOpen(false)
        })

}
const editForm = (
    <form className='edit-profile-form' onSubmit={handleEditFormSubmit}>
        <input type="text" placeholder="first name" name="first_name" value={first_name} onChange={handleFormData}/>
        <br />
        <input type="text" placeholder="last name" name="last_name" value={last_name} onChange={handleFormData}/>
        <br />
        <input type='password' placeholder="password" name="password" value={password} onChange={handleFormData}/>
        <br />
        <input type="text" placeholder="Tell us about you" name="bio" value={bio} onChange={handleFormData}/>
        <br />
        <button type="button" className="cancel-button" onClick={() => setEditFormIsOpen(false)}>Cancel</button>
        <button type="submit">Save</button>
    </form>
)

const editButton = <button onClick={()=> setEditFormIsOpen(true)}>Edit</button>

//UserProfilePhoto update
// const updateProfilePhoto = async () => {
//     const newProfilePhoto = await
//     // get selected photo
//     // update state here
//     setProfilePhoto()
// }

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
        <section className="profile">
            <input type="file" accept='image/*' name="photo" id="profilePhotoInput" />
            <label htmlFor="profilePhotoInput">
                <div className="profile-photo" role="button" title="Click to edit photo">
                    <img src={profileIcon} alt="profile" />
                </div>
            </label>

            <div className="profile-info">
                <p className="name">{currentUser.full_name}</p>
                <p className="username">@{currentUser.user_name}</p>
                <p className="bio">{currentUser.bio} </p>
                {editFormIsOpen ? editForm : editButton}
                <button className="cancel-button" onClick={deleteAccount}> Deactivate </button>
            </div>
        </section>
    )
}

export default UserProfile