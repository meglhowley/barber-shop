import { Rating } from 'react-rainbow-components'
import moment from 'moment'

const ReviewCard = (props) => {
  return (
    <div className="reviewCard">
      <div className="reviewCardRowOne">
        <h3>{`${props.review.User.firstName} ${props.review.User.lastName[0]}.`}</h3>
        <Rating value={props.review.star} readOnly />
        <h4>{moment(props.review.createdAt).fromNow()}</h4>
      </div>

      <h5>{props.review.content}</h5>
    </div>
  )
}

export default ReviewCard
