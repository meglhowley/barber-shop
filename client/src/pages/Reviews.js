import { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import ReviewForm from '../components/ReviewForm'
import ReviewCard from '../components/ReviewCard'

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
  // console.log(props)

  useEffect(() => {
    FindAllReviews()

    // console.log(state)
  }, [])

  const FindAllReviews = async () => {
    const res = await axios.get(`${BASE_URL}/reviews/all`)
    console.log(res.data)
    dispatch({ type: 'setReviews', payload: res.data })
  }

  const createNewReview = async () => {}

  console.log(state.reviews)

  const createMappedReviews = () => {}

  const mappedReviews = state.reviews.map((review, i) => (
    <ReviewCard key={i} review={review} />
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
          <ReviewForm dispatch={dispatch} state={state} userId={props.userId} />
        ) : null}
      </div>
      <div className="all-reviews">{mappedReviews}</div>
    </div>
  )
}

export default Reviews
