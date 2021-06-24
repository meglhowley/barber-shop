import { Rating } from 'react-rainbow-components'

const ReviewCard = (props) => {
  return (
    <div className="reviewCard">
      Review Card
      <h2>{`${props.review.User.firstName} ${props.review.User.lastName[0]}.`}</h2>
      <h3>{props.review.createdAt}</h3>
      <Rating value={props.review.star} readOnly />
      <h3>{props.review.content}</h3>
    </div>
  )
}

export default ReviewCard
