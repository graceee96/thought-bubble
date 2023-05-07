const connection = require('../config/connection');
const { User, Thought } = require('../models');
const thoughtData = require('./seeds/thoughtData')

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});

    //create new user documents

    //create thought documents
    Thought.create(thoughtData, (err) => {err ? handleError(err) : console.log('Created new documents')})
})