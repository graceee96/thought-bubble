const connection = require('../../config/connection');
const { User, Thought } = require('../../models');
const thoughtData = require('./thoughtData');
const userData = require('./userData')

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Thought.deleteMany({});
    let thoughts;
    //create thought documents
    for (const thought of thoughtData) {
        thoughts = await Thought.create(thought);
    }
    

    //console.log(thoughts);

    //create new user documents
    //insert _id of thoughts array into users
    for (const user of userData) {
        await User.create({...user, thoughts: [thoughtData[Math.floor(Math.random() * thoughtData.length)]._id]})
    }

    console.log('seeding complete 🌱')
    process.exit(0);
})