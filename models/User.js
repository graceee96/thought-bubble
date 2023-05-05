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
            match: {$regex: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/},
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