const router = require('express').Router()
const controller = require('../controllers/ReviewController')

router.post('/create', controller.CreateReview)
router.delete('/:review_id', controller.DeleteReview)
router.get('/all', controller.FindAllReviews)
router.get('/id/:review_id', controller.FindReviewById)
router.get('/user/:user_id', controller.FindReviewByUserId)
router.put('/:review_id', controller.UpdateReview)
module.exports = router
