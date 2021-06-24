const router = require('express').Router()
const controller = require('../controllers/ReviewController')

router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)
router.delete(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)
router.get('/all', controller.FindAllReviews)
router.get('/id/:review_id', controller.FindReviewById)
router.get(
  '/user',
  middleware.stripToken,
  middleware.verifyToken,
  controller.FindReviewByUserId
)
router.put(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)
module.exports = router
