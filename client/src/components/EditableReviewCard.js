const EditableReviewCard = (props) => {
  return (
    <div className="reviewCard">
      Editable Review Card
      <h2>{`${props.review.User.firstName} ${props.review.User.lastName[0]}.`}</h2>
      <h3>{props.review.createdAt}</h3>
      <Rating value={props.review.star} readOnly />
      <h3>{props.review.content}</h3>
      <button>Edit Review</button>
      <button>Delete Review</button>
    </div>
  )
}

export default EditableReviewCard
