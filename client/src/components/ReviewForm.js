import { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Card, ButtonGroup, ButtonIcon, Rating } from 'react-rainbow-components'
// import e from 'express'

// const SimpleRating = (props) => {
//   console.log(props)
//   const handleOnChange = (e) => {
//     return props.setNewPost({ star: e.target.value })
//   }

//   return <Rating value={props.star} onChange={handleOnChange} />
// }

const ReviewForm = (props) => {
  console.log(props)
  const [newPost, setNewPost] = useState({
    content: '',
    star: 3
  })
  const [posts, setPosts] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewPost({ ...newPost, [name]: value })
  }
  const submitPost = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/reviews/create`, newPost)
      console.log(res.data)
      props.dispatch({
        type: 'setReviews',
        payload: [res.data, ...props.state.reviews]
      })
      setNewPost({ star: 3, content: '' })
      props.dispatch({
        type: 'toggleNewReview',
        payload: !props.state.newReview
      })
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
      <form>
        <h1>Add A Review:</h1>
        <Rating value={newPost.star} onChange={handleChange} name="star" />
        {/* <label>Body</label> */}
        <textarea
          onChange={handleChange}
          type="text"
          name="content"
          value={newPost.content}
          placeholder="Leave details about your review here!"
        />
        <div className="reviewFormBtns">
          <button onClick={submitPost}>Submit Review</button>
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
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
