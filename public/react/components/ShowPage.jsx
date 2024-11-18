import { useEffect, useState } from 'react'

export default function ShowPage({ showPage }) {

    const [data, setData] = useState(null)

    async function apiCall() {
        const req = await fetch(`http://localhost:3000/api/users/${showPage.authorId}`)
        const res = await req.json()
        setData(res)
    }

    useEffect(() => {
        apiCall()
    }, [showPage.authorId])

    // find tags with API call next

    return (
        <>
            <h1>{showPage.title}</h1>
            <h3>{showPage.content}</h3>
            <p>{showPage.updatedAt}</p>
            {data ? <p>Written By: {data.name}</p> : <p>Loading...</p>} {/* Show loading while data is fetching */}
        </>
    )
}
