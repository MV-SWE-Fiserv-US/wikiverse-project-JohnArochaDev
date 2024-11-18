import { useEffect } from 'react'

export default function ShowPage({ showPage }) {

    useEffect(() => {
        // make API call to find the user
    }, [])

    return (
        <>
            <h1>{showPage.title}</h1>
            <h3>{showPage.content}</h3>
            <p>{showPage.updatedAt}</p>
        </>
    )
}