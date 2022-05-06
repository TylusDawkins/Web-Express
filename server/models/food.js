const mongoose = require('mongoose');
const Schema  = mongoose.Schema


const Foods = new Schema(
    {
        email: {type: String, required: true},
    },

    {timestamps: true}
)

module.exports = mongoose.model('Foods', Foods)