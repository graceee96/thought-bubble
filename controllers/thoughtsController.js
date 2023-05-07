const { User, Thought } = require('../models');

module.exports = {
    //get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },

    //render a single thought using _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    },

    //create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then
    }

    //update a thought using _id
    //delete a thought using _id

    //create a reaction

    //delete a reaction
}