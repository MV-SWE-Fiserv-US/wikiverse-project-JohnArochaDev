import { useEffect, useState } from 'react'

export default function ShowPage({ showPage }) {

    const [data, setData] = useState(null)

    async function apiCall() {
        const req = await fetch(`http://localhost:3000/api/users/${showPage.authorId}`)
        const res = await req.json()
        setData(res)
        const req2 = await fetch(`http://localhost:3000/api/wiki/${data.slug}`)

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
            {data ? <p>Written By: {data.name}</p> : <p>Loading...</p>}
            {data ? <p>#{data.title.tags[0].name}</p> : <p>Loading...</p>}
        </>
    )
}