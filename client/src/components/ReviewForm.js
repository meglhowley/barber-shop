import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Rating } from 'react-rainbow-components'

const ReviewForm = ({ handleChange, newPost, submitPost, state, dispatch }) => {
  return (
    <div className="reviewForm">
      <form>
        <h1>Add A Review:</h1>
        <Rating
          value={state.newPost.star}
          onChange={handleChange}
          name="star"
        />

        <textarea
          onChange={handleChange}
          type="text"
          name="content"
          value={state.newPost.content}
          placeholder="Leave details about your review here!"
        />
        <div className="reviewFormBtns">
          <button onClick={submitPost}>Submit Review</button>
          <button
            onClick={() => {
              dispatch({
                type: 'toggleNewReview',
                payload: !state.newReview
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
