const mongoose = require('mongoose');
const Schema  = mongoose.Schema


const BlogPost = new Schema(
    {
        title: {type: String, required: true},
        entry: {type: String, required: true},
        date: {type: Date, default:Date(), required: true},
        image: {type: String, required: true},
    },

    {timestamps: true}
)

module.exports = mongoose.model('BlogPost', BlogPost)