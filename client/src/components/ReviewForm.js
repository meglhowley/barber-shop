import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Rating } from 'react-rainbow-components'

const ReviewForm = (props) => {
  const [newPost, setNewPost] = useState({
    content: '',
    star: 3
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewPost({ ...newPost, [name]: value })
  }
  const submitPost = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/reviews/create`, newPost)
      props.dispatch({
        type: 'setReviews',
        payload: [res.data, ...props.state.reviews]
      })
      setNewPost({ star: 3, content: '' })
      props.dispatch({
        type: 'toggleNewReview',
        payload: !props.state.newReview
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="reviewForm">
      <form>
        <h1>Add A Review:</h1>
        <Rating value={newPost.star} onChange={handleChange} name="star" />

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
