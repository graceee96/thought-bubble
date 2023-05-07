const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        userID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
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
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

// sees how many friends a user has
userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length;
    })

const User = model('user', userSchema);

module.exports = User;