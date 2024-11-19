import { useCallback, useEffect, useState } from 'react'

export default function ShowPage({ showPage, setShowPage }) {

    const [data, setData] = useState(null)
    const [author, setAuthor] = useState(null)

    async function apiCall() {
        const req = await fetch(`http://localhost:3000/api/wiki/${showPage.slug}`)
        const res = await req.json()
        const authorReq = await fetch(`http://localhost:3000/api/users/${showPage.authorId}`)
        const authorRes = await authorReq.json()

        setAuthor(authorRes.name)
        setData(res)

    }

    function handleClick() {
        setShowPage(null)
    }

    useEffect(() => {
        console.log('data in', showPage)
        apiCall()
    }, [showPage.authorId])

    // find tags with API call next

    return (
        <>
            <h1>{showPage.title}</h1>
            <h3>{showPage.content}</h3>
            <p>{showPage.updatedAt}</p>
            {author ? <p>Written By: {author}</p> : <p>Loading...</p>}
            {data ? <p>#{data.tags[0].name}</p> : <p>Loading...</p>}

            <button onClick={handleClick}>Return to all blogs</button>
        </>
    )
}