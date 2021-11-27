const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    },

})

module.exports = model('Comment', schema)