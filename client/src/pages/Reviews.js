import { useEffect, useReducer } from 'react'
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

  useEffect(() => {
    FindAllReviews()
  }, [])

  const FindAllReviews = async () => {
    const res = await axios.get(`${BASE_URL}/reviews/all`)
    dispatch({ type: 'setReviews', payload: res.data })
  }

  const mappedReviews = state.reviews.map((review, i) => (
    <ReviewCard key={i} review={review} />
  ))

  return (
    <div>
      <h2>Reviews Page</h2>
      <div>
        {props.authenticated ? (
          <button
            onClick={() => {
              dispatch({ type: 'toggleNewReview', payload: !state.newReview })
            }}
          >
            Add a Review
          </button>
        ) : (
          <div></div>
        )}

        {state.newReview ? (
          <ReviewForm dispatch={dispatch} state={state} userId={props.userId} />
        ) : null}
      </div>
      <div className="all-reviews">{mappedReviews}</div>
    </div>
  )
}

export default Reviews
