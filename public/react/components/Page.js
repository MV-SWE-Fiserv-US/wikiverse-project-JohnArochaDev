import React from 'react'

export default function Page({ page, showPage, setShowPage }) {

  function handleClick() {
    setShowPage(page)
    setTimeout(() => {
      console.log('slug or no slug', page)
    }, 1000)
  }

  function deleteClick(pageSlug) {
    const url = `http://localhost:3000/api/wiki/${page.slug}`
    console.log(url)
  
    fetch(url, {
      method: 'DELETE'
    })

    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

  return <>
    <h3 onClick={handleClick} >{page.title}</h3>
    <button onClick={deleteClick} >Delete</button>
  </>
}