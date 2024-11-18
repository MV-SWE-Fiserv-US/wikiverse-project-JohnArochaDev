import React from 'react'

export default function Page({ page, showPage, setShowPage }) {

  function handleClick() {
    setShowPage(page)
    console.log('showPage now', showPage)
  }

  return <>
    <h3 onClick={handleClick} >{page.title}</h3>
  </>
}