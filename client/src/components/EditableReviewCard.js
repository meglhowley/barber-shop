import { Rating } from 'react-rainbow-components'

const EditableReviewCard = (props) => {
  return (
    <div className="editableReviewCard">
      <Rating value={props.review.star} readOnly />
      <h3>{props.review.content}</h3>
      <h4>{`${props.review.User.firstName} ${props.review.User.lastName[0]}.`}</h4>
      <h4>{moment(props.review.createdAt).fromNow()}</h4>
    </div>
  )
}

export default EditableReviewCard
