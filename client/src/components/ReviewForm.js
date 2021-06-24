import { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Card, ButtonGroup, ButtonIcon, Rating } from 'react-rainbow-components'
// import e from 'express'

const SimpleRating = (props) => {
  const [value, setValue] = useState(3)

  const handleOnChange = (e) => {
    return setValue(e.target.value)
  }

  return <Rating value={value} onChange={handleOnChange} />
}

const ReviewForm = (props) => {
  console.log(props)
  const [newPost, setNewPost] = useState({ rating: '', body: '' })
  const [posts, setPosts] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewPost({ ...newPost, [name]: value })
  }
  const submitPost = async (e) => {
    e.preventDefault()
    try {
      console.log(newPost)
      // let token = localStorage.getItem('token')
      // const res = await axios.post(`${BASE_URL}/posts`, newPost)
      // setPosts([...posts, res.data])
      // setNewPost({ title: '', body: '', image: '' })
      // toggleCreatePostOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="reviewForm">
      ReviewForm
      <form onSubmit={submitPost}>
        <SimpleRating />
        <label>Body</label>
        <textarea
          onChange={handleChange}
          type="text"
          name="body"
          value={newPost.body}
          placeholder="Leave details about your review here!"
        />
        <button
          onClick={() => {
            props.dispatch({
              type: 'toggleNewReview',
              payload: !props.state.newReview
            })
          }}
        >
          Close Review
        </button>
        <button onClick={submitPost}>Submit Review</button>
      </form>
    </div>
  )
}

export default ReviewForm
