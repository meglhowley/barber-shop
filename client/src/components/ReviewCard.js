const ReviewCard = (props) => {
  return (
    <div className="reviewCard">
      Review Card
      <h2>{`${props.review.User.firstName} ${props.review.User.lastName[0]}.`}</h2>
      <p>{props.review.star}</p>
      <h3>{props.review.content}</h3>
      <h3>{props.review.createdAt}</h3>
    </div>
  )
}

export default ReviewCard
