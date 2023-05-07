const { User, Thought } = require('../models');

module.exports = {
    //get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    
    //get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId})
            .populate('thoughts')
            .populate('user')
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },

    //create a new user
    createUser(req, res) {
        User.create(req.body, { runvalidators: true, new: true })
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },

    //update user by _id
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runvalidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },

    //delete user by _id + associated thoughts
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this ID' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    //add friend to user's friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId }},
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },

    //remove friend from user's friend list
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId }},
            { runValidators: true, new: true }
        )
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with this ID' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    }
}