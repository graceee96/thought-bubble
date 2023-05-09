const connection = require('../../config/connection');
const { User, Thought } = require('../../models');
const thoughtData = require('./thoughtData');
const userData = require('./userData')

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});
    
    //create thought documents
    const thoughts = await Thought.collection.insertMany(thoughtData);

    console.log(thoughts)
    //create new user documents
    //let users = await User.collection.insertMany(userData);

    //insert _id of thoughts array into users
    for (const user of userData) {
        await User.create({...user, thoughts: [thoughtData[Math.floor(Math.random() * thoughtData.length)]._id]})
    }


    console.log('seeding complete 🌱')
    process.exit(0);
})