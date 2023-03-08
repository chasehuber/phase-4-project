function ReplyCard({reply}) {

    const {user_id, content} = reply
    return (
        <>
        <p>{user_id}</p>
        <p>{content}</p>
        </>
    )
}

export default ReplyCard