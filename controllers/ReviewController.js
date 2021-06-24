const { Review, User } = require('../models')

const CreateReview = async (req, res) => {
  try {
    const { star, content } = req.body

    let reviewBody = {
      userId: res.locals.payload.id,
      star,
      content
    }
    const review = await Review.create(reviewBody)
    const user = await User.findAll({ where: { id: reviewBody.userId } })
    review.User.firstName = user.firstName
    review.User.lastName = user.lastName
    res.send(review)
  } catch (error) {
    throw error
  }
}
const DeleteReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    await Review.destroy({ where: { id: reviewId } })
    res.send({ message: `Deleted review with an id of ${reviewId}` })
  } catch (error) {
    throw error
  }
}
const FindAllReviews = async (req, res) => {
  try {
    let reviews = await Review.findAll({
      include: [{ model: User, attributes: ['firstName', 'lastName'] }]
    })
    res.send(reviews)
  } catch (error) {
    throw error
  }
}
const FindReviewById = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    const review = await Review.findByPk(reviewId)
    res.send(review)
  } catch (error) {
    throw error
  }
}
const FindReviewByUserId = async (req, res) => {
  try {
    let userId = parseInt(res.locals.payload.id)
    const review = await Review.findAll({ where: { userId: userId } })
    res.send(review)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    req.body.userId = parseInt(res.locals.payload.id)
    let review = await Review.update(req.body, {
      where: { id: reviewId },
      returning: true
    })
    res.send(review)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateReview,
  DeleteReview,
  FindAllReviews,
  FindReviewById,
  FindReviewByUserId,
  UpdateReview
}
