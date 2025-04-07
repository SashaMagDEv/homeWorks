const { Schema, model } = require('mongoose')

const listSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        completed: { type: Boolean, default: false }
    }
}, {
    timestamps: true
})

module.exports = model('Todo', listSchema);

