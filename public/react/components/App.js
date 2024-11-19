import React, { useState, useEffect } from 'react'
import { PagesList } from './PagesList'
import ShowPage from './ShowPage'

import apiURL from '../api'

export const App = () => {
  const [pages, setPages] = useState([])
  const [showPage, setShowPage] = useState(null)

  async function fetchPages () {
    try {
      const response = await fetch(`${apiURL}/wiki`)
      const pagesData = await response.json()
      setPages(pagesData)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  useEffect(() => {
    fetchPages()
  }, [])

  return (
		<main>
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			{showPage ? <ShowPage showPage={showPage} setShowPage={setShowPage}  /> : <PagesList pages={pages} showPage={showPage} setShowPage={setShowPage} />}
		</main>
  )
}