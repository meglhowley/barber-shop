import Nav from '../components/Nav'
import { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import ReviewForm from '../components/ReviewForm'

const iState = {
  reviews: [],
  newReview: false
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'setReviews':
      return { ...state, reviews: action.payload }
    case 'toggleNewReview':
      return { ...state, newReview: action.payload }
    default:
      return state
  }
}

const Reviews = (props) => {
  const [state, dispatch] = useReducer(reducer, iState)

  useEffect(() => {
    FindAllReviews()
    console.log(state)
  }, [state.newReview])

  const FindAllReviews = async () => {
    const res = await axios.get(`${BASE_URL}/reviews/all`)
    console.log(res.data)
    dispatch({ type: 'setReviews', payload: res.data })
  }

  const mappedReviews = state.reviews.map((review, i) => (
    <div key={i}>
      <h2>{`${review.User.firstName} ${review.User.lastName[0]}.`}</h2>
      <p>{review.star}</p>
      <h3>{review.content}</h3>
      <h3>{review.createdAt}</h3>
    </div>
  ))
  return (
    <div>
      <h2>Reviews Page</h2>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'toggleNewReview', payload: !state.newReview })
          }}
        >
          Add a Review
        </button>
        {state.newReview ? (
          <ReviewForm dispatch={dispatch} state={state} />
        ) : null}
      </div>
      <div className="all-reviews">{mappedReviews}</div>
    </div>
  )
}

export default Reviews
