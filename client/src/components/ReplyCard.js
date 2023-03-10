import { useEffect, useState } from "react"

function ReplyCard({reply}) {
    const {user_id, content} = reply
    const [username, setUsername] = useState('')

    useEffect(()=> {
        fetch(`/users/${user_id}`)
        .then(r => r.json())
        .then((data) => {
        setUsername(data.user_name);
        })
    }, [])

    return (
        <>
        <div className="basic-box">
            <p className="basic-box max-w-max">{username}</p>
            <p className="basic-box">{content}</p>
        </div>
        </>
    )
}

export default ReplyCard