const {Router} = require('express')
const router = Router()
const commentController = require('../controllers/commentController')

router.post('', commentController.createComment)
router.get('', commentController.getComments)
router.get('/test-get-request', commentController.testGetRequest)
router.post('/add-post-request', commentController.testPostRequest)

module.exports = router