import React from 'react'
import Page from './Page'

export const PagesList = ({ pages, showPage, setShowPage }) => {
	console.log('hi', pages)
  return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} key={idx} showPage={showPage} setShowPage={setShowPage} />
			})
		}
	</>
}
