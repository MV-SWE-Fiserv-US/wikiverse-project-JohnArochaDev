import React, { useState } from 'react'

export default function ArticleForm ({ authorId }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: '',
    name: 'Annie Position',
    email: 'annie@email.com',
    status: 'open'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { title, content, tags, name, email, status } = formData

    if (!title || !content || !name || !email) {
      alert('Title, content, name, and email are required.')
      return
    }

    const postData = {
      title,
      content,
      status,
      name,
      email,
      tags
    }

    try {
      const response = await fetch('http://localhost:3000/api/wiki', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      if (response.ok) {
        alert('Article added successfully!')
        setFormData({
          title: '',
          content: '',
          tags: '',
          name: 'Annie Position',
          email: 'annie@email.com',
          status: 'open'
        })
      } else {
        alert('Error adding article.')
      }
    } catch (error) {
      console.error('Error adding article:', error)
      alert('There was an error submitting the form.')
    }
  }

  return (
    <div>
      <h2>Add a New Wiki Article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Content:
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Tags (optional, space-separated):
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <input type="hidden" name="name" value={formData.name} />
        <input type="hidden" name="email" value={formData.email} />
        <div>
          <label>
            Status:
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </label>
        </div>
        <button type="submit">Add Article</button>
      </form>
    </div>
  )
}
