const ReviewForm = (props) => {
  console.log(props)
  return (
    <div className="reviewForm">
      ReviewForm
      <form>
        <label>Body</label>
        <textarea
          // onChange={handleChange}
          type="text"
          name="body"
          // value={newPost.body}
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
      </form>
    </div>
  )
}

export default ReviewForm
