import { useEffect, useState } from "react"

function ReplyCard({reply}) {
    const {user_id, content} = reply
    const [username, setUsername] = useState('')

    useEffect(()=> {
        fetch(`http://localhost:4000/users/${user_id}`)
        .then(r => r.json())
        .then((data) => {
          setUsername(data.user_name);
        })
    }, [])

    return (
        <>
        <p>{username}</p>
        <p>{content}</p>
        </>
    )
}

export default ReplyCard