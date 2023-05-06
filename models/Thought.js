const { Schema, model } = require('mongoose');
const reactions = require('./Reaction');
const formatDate = require('../utils/helpers/formatDate');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (v) => formatDate(v)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactions]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
)

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return reaction.length;
    })

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;