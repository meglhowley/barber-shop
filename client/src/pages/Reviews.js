import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import ReviewForm from '../components/ReviewForm'
import ReviewCard from '../components/ReviewCard'

const iState = {
  reviews: [],
  newReview: false,
  newPost: {
    content: '',
    star: 3
  }
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'setReviews':
      return { ...state, reviews: action.payload }
    case 'toggleNewReview':
      return { ...state, newReview: action.payload }
    case 'addNewReview':
      return {
        ...state,
        newPost: {
          ...state.newPost,
          [action.payload.name]: action.payload.value
        }
      }
    default:
      return state
  }
}

const Reviews = (props) => {
  const [state, dispatch] = useReducer(reducer, iState)

  // const [newPost, setNewPost] = useState({
  //   content: '',
  //   star: 3
  // })
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

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch({ type: 'addNewReview', payload: { name, value } })
  }

  const submitPost = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/reviews/create`, state.newPost)
      dispatch({
        type: 'setReviews',
        payload: [res.data, ...state.reviews]
      })
      // setNewPost({ star: 3, content: '' })
      dispatch({
        type: 'toggleNewReview',
        payload: !state.newReview
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="servicesWrapper">
      <div>
        {props.authenticated && !state.newReview ? (
          <button
            id="addReviewBtn"
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
          <ReviewForm
            dispatch={dispatch}
            // newPost={newPost}
            handleChange={handleChange}
            submitPost={submitPost}
            state={state}
            userId={props.userId}
          />
        ) : null}
      </div>
      <div className="all-reviews">{mappedReviews}</div>
    </div>
  )
}

export default Reviews
