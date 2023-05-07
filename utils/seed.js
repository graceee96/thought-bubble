const connection = require('../config/connection');
const { User, Thought } = require('../models');
const thoughtData = require('./seeds/thoughtData');
const userData = require('./seeds/userData')

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});
    
    //create thought documents
    const thoughts = await Thought.collection.insertMany(thoughtData);

    //create new user documents
    let users = await User.collection.insertMany(userData);

    //insert _id of thoughts array into users

    //add _id into friends array of users - each user has random amounts of random friends


    console.log('seeding complete 🌱')
    process.exit(0);
})