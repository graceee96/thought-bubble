const { User, Thought } = require('../models');

module.exports = {
    //get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            })
    },

    //render a single thought using _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this ID' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    //create a new thought
    createThought(req, res) {
        console.log(req.body)
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                )
            })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Thought created, but found no user with this ID'})
                    : res.json('Created new thought!')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    //update a thought using _id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this ID' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    //delete a thought using _id
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this ID'})
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId},
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Thought deleted, but no user with this ID' })
                    : res.json({ message: 'Thought successfully deleted '})
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //create a reaction
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) => {
                console.log(thought)
                return !thought
                ? res.status(404).json({ message: 'No thought with this ID' })
                : res.json(thought)
            }
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //delete a reaction
    deleteReaction(req, res) {
        console.log(req.params)
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: {reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            
            .then((thought) => {
                console.log(thought)
                return !thought
                ? res.status(404).json({ message: 'No thought with this ID' })
                : res.json(thought)
            }
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
}