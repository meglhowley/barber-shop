import { Rating } from 'react-rainbow-components'
import moment from 'moment'
import { useState } from 'react'
import EditableReviewForm from './EditableReviewForm'

const EditableReviewCard = (props) => {
  const [updateOpen, setUpdateOpen] = useState(false)

  if (!updateOpen) {
    return (
      <div className="editableReviewCard">
        <Rating value={props.review.star} readOnly />
        <h3>{props.review.content}</h3>
        <h4>{moment(props.review.createdAt).fromNow()}</h4>
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
