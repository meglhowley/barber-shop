const ReviewCard = (props) => {
  return (
    <div className="reviewCard">
      Review Card
      <h2>{`${review.User.firstName} ${review.User.lastName[0]}.`}</h2>
      <p>{review.star}</p>
      <h3>{review.content}</h3>
      <h3>{review.createdAt}</h3>
    </div>
  )
}

export default ReviewCard
