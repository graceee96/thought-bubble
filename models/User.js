const { Schema, model } = require('mongoose');
const Thoughts = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        thoughts: [Thoughts],
        friends: [users]
    },
    {
        toJson: {
            virtuals: true,
        }
    }
)

userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    })