//import reactions
const { reactions1, reactions2, reactions4, reactions5, reactions6, reactions7, reactions8, reactions9, reactions10, reactions11, reactions12, reactions13, reactions15, reactions17, reactions19, reactions21 } = require('./reactionData');
const mongoose = require('mongoose');

//thoughtData
const thoughts = [
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "Crying is for plain women. Pretty women go shopping.",
        "username": "blanche_forever45",
        "reactions": [...reactions1]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "People waste their time pondering whether a glass is half empty or half full. Me, I just drink whatever is in the glass.",
        "username": "picture_it_sophia",
        "reactions": [...reactions2]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "some files are just too awesome for the wall",
        "username": "the_real_abed",
        "reactions": []
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "A garconanokin is the precise moment when dog doo turns white.",
        "username": "rose_of_stolaf",
        "reactions": [...reactions4]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "As they say in St. Olaf: helderberlderflergen-nursurblrgen",
        "username": "rose_of_stolaf",
        "reactions": [...reactions5]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "I'm from the South. Flirting is part of my heritage.",
        "username": "blanche_forever45",
        "reactions": [...reactions6]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "Picture it: Sicily 1922",
        "username": "picture_it_sophia",
        "reactions": [...reactions7]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "My mother used to say: the older you get, the better you get. Unless you’re a banana.",
        "username": "rose_of_stolaf",
        "reactions": [...reactions8]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "I was kinda raised by TV",
        "username": "the_real_abed",
        "reactions": [...reactions9]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "Dean Pelton here, wishing you another magic year at Greendale--ranked America's #2 community college by GreendaleCommunityCollege.com.",
        "username": "dean_of_greendale",
        "reactions": [...reactions10]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "you are now creating six different timelines",
        "username": "the_real_abed",
        "reactions": [...reactions11]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "Off campus, I'm just a craig-ular Joe.",
        "username": "dean_of_greendale",
        "reactions": [...reactions12]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "sometimes I think I lost something really important to me, and it turns out I already ate it",
        "username": "troy.troy.troy",
        "reactions": [...reactions13]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "you are the opposite of Batman",
        "username": "troy.troy.troy",
        "reactions": []
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "Miami is nice. So I'll say it thrice!",
        "username": "rose_of_stolaf",
        "reactions": [...reactions15]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "Isn't it amazing how I can feel so bad, and still look so good?",
        "username": "blanche_forever45",
        "reactions": []
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "You know my motto. Today could be the last day of your life.",
        "username": "picture_it_sophia",
        "reactions": [...reactions17]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "This awkward silence has been going on for days!",
        "username": "dean_of_greendale",
        "reactions": []
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "My emotions! My emotions!",
        "username": "troy.troy.troy",
        "reactions": [...reactions19]
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "six seasons and a movie!",
        "username": "the_real_abed",
        "reactions": []
    },
    {
        "_id": mongoose.Types.ObjectId(),
        "thoughtText": "Go to sleep, sweetheart. Pray for brains.",
        "username": "bigmean_dorothy",
        "reactions": [...reactions21]
    }
];

module.exports = thoughts;