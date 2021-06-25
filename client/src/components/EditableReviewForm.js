import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Rating } from 'react-rainbow-components'

const EditableReviewForm = (props) => {
  const [newPost, setNewPost] = useState({
    content: props.review.content,
    star: props.review.star
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewPost({ ...newPost, [name]: value })
  }
  const submitPost = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(
        `${BASE_URL}/reviews/${props.review.id}`,
        newPost
      )
      props.setUpdateOpen(!props.updateOpen)
      props.dispatch({ type: 'setForceUpdate', payload: res })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="reviewForm">
      <form onSubmit={submitPost}>
        <Rating value={newPost.star} onChange={handleChange} name="star" />
        <textarea
          onChange={handleChange}
          type="text"
          name="content"
          value={newPost.content}
          placeholder="Leave details about your review here!"
        />
        <div className="reviewFormBtns">
          <button onClick={submitPost}>Update Review</button>
          <button
            onClick={() => {
              props.setUpdateOpen(!props.updateOpen)
            }}
          >
            Cancel Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditableReviewForm
