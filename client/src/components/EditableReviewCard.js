import { Rating } from 'react-rainbow-components'
import moment from 'moment'
import { useState } from 'react'
import EditableReviewForm from './EditableReviewForm'

const EditableReviewCard = (props) => {
  const [updateOpen, setUpdateOpen] = useState(false)

  if (!updateOpen) {
    return (
      <div className="reviewCard">
        <div className="reviewCardRowOne">
          <h4>{moment(props.review.createdAt).fromNow()}</h4>
          <Rating value={props.review.star} readOnly />
        </div>

        <h5>{props.review.content}</h5>
        <div className="reviewFormBtns">
          <button
            onClick={() => {
              props.handleUserReviewDelete(props.review.id)
            }}
          >
            Delete Review
          </button>
          <button
            onClick={() => {
              setUpdateOpen(!updateOpen)
            }}
          >
            Edit Review
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <EditableReviewForm
          {...props}
          setUpdateOpen={setUpdateOpen}
          updateOpen={updateOpen}
          dispatch={props.dispatch}
        />
      </div>
    )
  }
}

export default EditableReviewCard
