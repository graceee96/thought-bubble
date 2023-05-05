const { Schema, model } = require('mongoose');
const reactions = require('./Reaction')

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
            get: (v) => {
                const date = new Date(v);

                //get date
                const year = date.getFullYear();

                //get month - write it out
                let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                month = mon[date.getMonth()];

                //get date
                const day = date.getDate();

                //format time
                //format hour
                let hour = date.getHours();
                hour = h % 12;
                hour = hour ? hour : 12;

                //add am/pm
                const ampm = hours >= 12 ? 'pm' : 'am';

                //format minutes
                let minute = date.getMinutes();
                minute = minute < 0 ? '0' + minute : minute;

                const time = `${hour}:${minute} ${ampm}`;

                return `${month} ${day}, ${year} at ${time}`;
            }
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