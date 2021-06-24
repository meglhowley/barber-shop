import { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Card, ButtonGroup, ButtonIcon, Rating } from 'react-rainbow-components'

const EditableReviewForm = (props) => {
  console.log('these are the props of editabel review form')
  console.log(props)
  const [newPost, setNewPost] = useState({
    content: props.review.content,
    star: props.review.star
  })
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
      const res = await axios.put(
        `${BASE_URL}/reviews/${props.review.id}`,
        newPost
      )
      console.log(res.data)
      props.setUpdateOpen(!props.updateOpen)
      props.dispatch({ type: 'setForceUpdate', payload: res })

      // props.dispatch({
      //   type: 'setReviews',
      //   payload: [res.data, ...props.state.reviews]
      // })
      // setNewPost({ star: 3, content: '' })
      // props.dispatch({
      //   type: 'toggleNewReview',
      //   payload: !props.iState.newReview
      // })
      // toggleCreatePostOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="reviewForm">
      ReviewForm
      <form onSubmit={submitPost}>
        <Rating value={newPost.star} onChange={handleChange} name="star" />
        <label>Body</label>
        <textarea
          onChange={handleChange}
          type="text"
          name="content"
          value={newPost.content}
          placeholder="Leave details about your review here!"
        />
        <button onClick={submitPost}>Update Review</button>
        <button
          onClick={() => {
            props.setUpdateOpen(!props.updateOpen)
          }}
        >
          Cancel Update of Review
        </button>
      </form>
    </div>
  )
}

export default EditableReviewForm
