import { Rating } from 'react-rainbow-components'
import moment from 'moment'

const EditableReviewCard = (props) => {
  return (
    <div className="editableReviewCard">
      <Rating value={props.review.star} readOnly />
      <h3>{props.review.content}</h3>
      <h4>{moment(props.review.createdAt).fromNow()}</h4>
    </div>
  )
}

export default EditableReviewCard
