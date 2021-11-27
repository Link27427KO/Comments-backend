const Comment = require('../models/Comment')

class CommentController {
    async createComment(req, res) {
        try {
            const {name, text} = req.body
            const comment = new Comment({
                name,
                text,
                createdDate: new Date()
            })
            await comment.save()
            return res.status(201).json(comment)
        } catch (e) {
            return res.status(400).json({error: "Error"})
        }
    }

    async getComments(req, res) {
        try {
            const {page, perPage, additionalSkip} = req.query
            const comments = await Comment.find()
                .limit(parseInt(perPage))
                .skip(parseInt(page)*parseInt(perPage) + parseInt(additionalSkip))
                .sort({createdDate: -1})
            return res.status(200).json(comments)
        } catch (e) {
            return res.status(400).json({error: "Error"})
        }
    }
    async testGetRequest(req, res) {
        try {

            return res.status(200).json({message: 'get test'})
        } catch (e) {
            return res.status(400).json({error: "Error"})
        }
    }

    async testPostRequest(req, res) {
        try {

            return res.status(200).json({message: 'post test'})
        } catch (e) {
            return res.status(400).json({error: "Error"})
        }
    }
}

module.exports = new CommentController()