const {Router} = require('express')
const router = Router()
const commentController = require('../controllers/commentController')

router.post('', commentController.createComment)
router.get('', commentController.getComments)

module.exports = router