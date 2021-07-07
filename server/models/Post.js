const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    photoUrl: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
})

module.exports = mongoose.model('Post', postSchema)