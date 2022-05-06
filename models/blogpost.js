const mongoose = require('mongoose');
const Schema  = mongoose.Schema


const BlogPost = new Schema(
    {
        name: {type: String, required: true},
        header: {type: String, required: true},
        entry: {type: String, required: true},
        date: {type: Date, required: true},
        Image: {type: String, required: true},
    },

    {timestamps: true}
)

module.exports = mongoose.model('BlogPost', BlogPost)